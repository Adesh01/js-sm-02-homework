var app = {

    userLocation: null,
    renderer: null,
    stage: null,
    bunny: null,
    textSample:null,
    selected: null,
    init: function() {
        console.log('app start');

        /* set up 500px */
        _500px.init({
            sdk_key: '51d49f188669e076620d6783b323825da885815a' // key found in the 500px.com/settings/application
        });

        $('a#login').on('click', function(e){
            e.preventDefault();
            /*get 500px authorization code*/
            _500px.login();
        });

        _500px.on('authorization_obtained', function () {

            $('div.sign-in-view').hide();
            $('div.canvas-view').show();
            app.getUserLocation();
        })

        $('button.get-photos').on('click', function(){

            // console.log(userQuery);

            app.loadImages();
            
        });

        /** add photo to screen **/
        $('.images2').on('click', 'img', function(){
            var photoUrl = $(this).attr('src');
            app.addPhoto(photoUrl);
            console.log('hello photo');
        });

        /* remove image */
        $('button.delete').on('click', function(){
            app.removePhoto();
            console.log('bye photo');
        });
        /** add Icon to screen **/
        $('.icon').on('click', 'img', function(){
            var iconUrl = $(this).attr('src');
            app.addIcon(iconUrl);
            console.log('hello icon');
        });

        /** Scale Item **/
        $('button.minus').on('click', function(){
            console.log('scaling down!!', app.selected);
            app.scaleItemMinus();
        });
        $('button.plus').on('click', function(){
            console.log('scaling UP!!', app.selected);
            app.scaleItemPlus();
        });

        /** take value from input **/
        $('#input-title').on('submit', function(e) {
            e.preventDefault();
            var textSample = $('input.title').val();
            app.addTitle(textSample);
        });

        $('#input-text').on('submit', function(e) {
            e.preventDefault();
            console.log('textarea text')
            var textSample = $('textarea.text').val();
            app.addText(textSample);
        });
        app.initPixi();
    },

    getUserLocation: function() {
            if (navigator.geolocation) {        //how to get the geolocation on your computer
                navigator.geolocation.getCurrentPosition( function(position){
                    console.log(position);

                    app.userLocation = position;
                    $('.get-photos').show();
                    //var geoQuery = position.coords.latitude + ',' + position.coords.longitude + ',' + 15 + 'mi';    //gets the coordinates
                    // or: var searchQuery = { geo: geoQuery, rpp:28, page: 1, image_size: 3, sort: 'highest_rating' }//and then put it in as a variable below
                 });
            }
    },

    loadImages: function() {
        console.log(app.userLocation);
        
         var geoQuery = app.userLocation.coords.latitude + ',' + app.userLocation.coords.longitude + ',' + 15 + 'mi';    //gets the coordinates
                       
         _500px.api('/photos/search', { geo: geoQuery, only: 'landscape', rpp:6, page: 1, image_size: 1, sort: 'highest_rating' }, app.displayPhotos); //callback function
           
    },

    displayPhotos: function(response) {
        response.data.photos.forEach(function(photo, index) { //gets info from Javascript SDK (sofware dev kit) on their site
            console.log(photo);
            $('div.images').append('<img class="image" src="'+ photo.image_url + '">');

            //var $image = $('<img>').attr('src', photo.image_url);
            //$('div.images').append( $image );
        });
    },

    addPhoto: function(photoUrl) {

        var texture = PIXI.Texture.fromImage(photoUrl);
        var bunny = new PIXI.Sprite(texture);

        // Setup the position and scale of the photo
        bunny.position.x = 10;
        bunny.position.y = 10;

        bunny 
            .on('mousedown', app.onDragStart)
            .on('mouseup', app.onDragEnd)
            .on('mouseupoutside', app.onDragEnd)
            .on('mousemove', app.onDragMove);
            

        //bunny.scale.x = 1;
        //bunny.scale.y = 1;
        //bunny.interactive = true;
    
        app.stage.addChild(bunny);
      
    },

    removePhoto:function() {
        
         app.stage.removeChild(app.selected);
    },

    addIcon: function(iconUrl) {
        console.log(iconUrl);

        var texture = PIXI.Texture.fromImage(iconUrl);
        var bunny = new PIXI.Sprite(texture);

        // Setup the position and scale of the bunny
        bunny.position.x = 50;
        bunny.position.y = 50;

        bunny.interactive = true;

        bunny 
            .on('mousedown', app.onDragStart)
            .on('mouseup', app.onDragEnd)
            .on('mouseupoutside', app.onDragEnd)
            .on('mousemove', app.onDragMove)
            .on('click', app.setSelected );

        // move the sprite to its designated position
        //bunny.on.position.x = x;
        //bunny.on.position.y = y;

        // bunny.scale.x = 2;
        // bunny.scale.y = 2;

        app.stage.addChild(bunny);
    },

    setSelected: function(){

        app.selected = this;

    },

    onDragStart: function(event) {
        // store a reference to the data
        // the reason for this is because of multitouch
        // we want to track the movement of this particular touch
        app.selected = this;
        this.data = event.data;
        this.alpha = 0.9;
        this.dragging = true;
    },

    onDragEnd: function() {
        app.selected = this;
        this.alpha = 1;
        this.dragging = false;
        // set the interaction data to null
        this.data = null;
    },

    onDragMove: function() {
        app.selected = this;
        if (this.dragging)
        {
            var newPosition = this.data.getLocalPosition(this.parent);
            this.position.x = newPosition.x;
            this.position.y = newPosition.y;
        }
    },

    scaleItemPlus: function() {

       if( app.selected.scale._x > 5.0 ){
            return;
        }
        
        var newScale = app.selected.scale._x + 0.25;
        app.selected.scale.set(newScale);
    },

    scaleItemMinus: function() {
        if( app.selected.scale._x < 0.50 ){
            return;
        }
        var newScale = app.selected.scale._x - 0.25;
        app.selected.scale.set(newScale);

    },
    addTitle: function() {
         //var texture = PIXI.Texture.fromImage(photoUrl);
        //var bunny = new PIXI.Sprite(texture);
        var title = $('input.title').val();
        var textSample = new PIXI.Text( title, { 'font-family': '35px Snippet', fill: 'white', align: 'center' });
        textSample.position.set(20);

        textSample 
            .on('mousedown', app.onDragStart)
            .on('mouseup', app.onDragEnd)
            .on('mouseupoutside', app.onDragEnd)
            .on('mousemove', app.onDragMove);


        // Setup the scale of the text
        textSample.scale.x = 1.75;
        textSample.scale.y = 1.75;
        textSample.interactive = true;
    
        app.stage.addChild(textSample);
    },
    addText: function() {
         //var texture = PIXI.Texture.fromImage(photoUrl);
        //var bunny = new PIXI.Sprite(texture);
        var title = $('textarea.text').val();
        var textSample = new PIXI.Text( title, { 'font-family': '15px Snippet', fill: 'white', align: 'center' });
        textSample.position.set(20);

         textSample 
            .on('mousedown', app.onDragStart)
            .on('mouseup', app.onDragEnd)
            .on('mouseupoutside', app.onDragEnd)
            .on('mousemove', app.onDragMove);
        // Setup the scale of the text
        //textSample.scale.x = 1;
        //textSample.scale.y = 1;
        textSample.interactive = true;
    
        app.stage.addChild(textSample);
    },
    initPixi: function(){
            app.renderer = PIXI.autoDetectRenderer(740, 600, { transparent: true });

            //app.renderer = PIXI.autoDetectRenderer(800, 600);

            // document.body.appendChild(app.renderer.view);

            $('div.canvas').append( app.renderer.view );

            app.renderer.backgroundColor = 0xFFFFFF;

            // create the root of the scene graph
            app.stage = new PIXI.Container();

            function animate() {

                requestAnimationFrame(animate);

                // render the stage
                app.renderer.render(app.stage);

            }

            animate();

    }

}

$(document).ready(app.init);