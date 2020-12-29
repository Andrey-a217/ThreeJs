// camera, scene, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight); // 70 - насколько широко видит камера.  какую область захватывает камера  
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color(0xdffddd);
renderer.setSize(window.innerWidth, window.innerWidth);//высота и ширина по размерам текущего экрана
document.body.appendChild(renderer.domElement); // добавили renderer в html документ

camera.position.z = 5; //позиция каmеры по z координате 

const points = [ //точки
    new THREE.Vector2(0, 0), 
    new THREE.Vector2(1, 1),  
    new THREE.Vector2(2, 0),
]

const material = new THREE.LineBasicMaterial({color: 0x08ff00});
const geometry = new THREE.BufferGeometry().setFromPoints(points);//геометрия 
const line = new THREE.Line(geometry, material);
scene.add(line);
// const material = new THREE.LineBasicMaterial({color: 0x08ff00})
// const geometryLine = new THREE.BufferGeometry().setFromPoints(points); //геометрия 
// const line = new THREE.Line(geometryLine, material); //прямая от точки до точки
// scene.add(line); //вывод прямой

//куб 
const material1 = new THREE.MeshBasicMaterial({color: 0xdddddd, }) //материал куба. можно добавить картинку, но нужно поднимать серв envMap: [color15__800_800.jpg]
const cubeGeometry = new THREE.BoxGeometry(2, 1, 2); //размеры x y z
const cube = new THREE.Mesh(cubeGeometry, material1)// создание кубa
scene.add(cube); //добавление на сцену

function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}

animate();