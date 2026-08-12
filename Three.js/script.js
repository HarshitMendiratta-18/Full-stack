//three.js javascript ki library hai jise ham iskhte hai bcz usme 3d things hoti hai.
//how to make quick cube
//transformations,animations,mesh,material,geometry


// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// const canvas=document.querySelector('canvas')
// const renderer = new THREE.WebGLRenderer({canvas:canvas});
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// function animate( time ) {
//   window.requestAnimationFrame(animate)
//   renderer.render( scene, camera );
//   cube.rotation.x = time / 2000;
// cube.rotation.y = time / 1000;
// }
// animate();


let scene=new THREE.Scene();
let camera=new THREE.PerspectiveCamera(65,window.innerWidth/window.innerHeight, .1,100);
camera.position.z=5;
scene.add(camera);
let box=new THREE.BoxGeometry(1,1,1);
let material=new THREE.MeshBasicMaterial({color:0x00ff00});
let mesh=new THREE.Mesh(box,material);
scene.add(mesh);

//mesh ek basic materila hai jo bina light ke bhi dikh jata hai .


//transformation
// mesh.position.x=4;
// mesh.position.z=3;
// mesh.position.y=2;

// mesh.rotation.x=34;
// mesh.rotation.z=2;
// mesh.rotation.y=40;

//scale:
mesh.scale.x=2.6;
// mesh.scale.y=4;
// mesh.scale.z=4;


// mesh.rotation.y=Math.PI; // 180 degree rotate hota hai.
// mesh.rotation.y=Math.PI /2; //90 degree rotate hota hai.
// mesh.rotation.y=Math.PI/4; //45 degreee rotate hota hai.





const canvas=document.querySelector('canvas');
let renderer=new THREE.WebGLRenderer({canvas:canvas});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.render(scene,camera);
//renderer ham print ke liye use karte hai.


//animations;

// let clock=new THREE.Clock();
// function animate(){
// window.requestAnimationFrame(animate);
// renderer.render(scene,camera);
// // mesh.rotation.y+=0.03;
// mesh.rotation.x=clock.getElapsedTime()*2;
// mesh.rotation.y=clock.getElapsedTime()*2;
// mesh.rotation.z=clock.getElapsedTime()*2;
// }
// animate();



