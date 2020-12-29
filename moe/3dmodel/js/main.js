window.onload = function(){

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(65, window.innerWidth/window.innerHeight, 0.1, 10000);

    var render = new THREE.WebGLRenderer({antialias:true});
    render.setSize(window.innerWidth, window.innerHeight);
    render.setClearColor(0xFFFFFF);

    document.body.appendChild(render.domElement);

    camera.position.z = 190;

    var manager = new THREE.LoadingManager();
    var loader = new THREE.ImageLoader(manager);

    var textureBody = new THREE.Texture();
    var textureHead = new THREE.Texture();

    loader.load('model/HEAD bump MAP.jpg', function(image){
        textureBody.image = image;
        textureBody.needsUpdate = true; 
    });

    loader.load('model/HEAD diff MAP.jpg', function(image){
        textureHead.image = image;
        textureHead.needsUpdate = true; 
    });

    var meshes = [];
    var objLoader = new THREE.OBJLoader();
    objLoader.load('model/bb8.obj', function(object){
        console.log(object);
    });

    var rendering = function(){
        requestAnimationFrame(rendering);
        render.render(scene, camera);
    };
    rendering();
};