let SCREEN_WIDTH = window.innerWidth,
  SCREEN_HEIGHT = window.innerHeight,
  SCREEN_WIDTH_HALF = SCREEN_WIDTH / 2,
  SCREEN_HEIGHT_HALF = SCREEN_HEIGHT / 2;

let camera, scene, renderer, birds, bird, landscapeMode, animationFrame;

if (SCREEN_WIDTH > SCREEN_HEIGHT) {
  landscapeMode = true;
} else {
  landscapeMode = false;
}

let boid, boids;

init();
animate();

const restart = () => {
  birds = [];
  boids = [];

  if (SCREEN_WIDTH + SCREEN_HEIGHT > 1600) {
    addBirds(80);
  } else {
    addBirds(50);
  }
};

function init() {
  camera = new THREE.PerspectiveCamera(
    75,
    SCREEN_WIDTH / SCREEN_HEIGHT_HALF,
    1,
    10000
  );
  camera.position.z = 400;

  scene = new THREE.Scene();

  birds = [];
  boids = [];

  if (SCREEN_WIDTH + SCREEN_HEIGHT > 1600) {
    addBirds(80);
  } else {
    addBirds(50);
  }

  // renderer.autoClear = false;

  document.addEventListener("mousemove", onDocumentMouseMove, false);
  const buttons = document.getElementById("map-button");
  buttons.addEventListener("click", stopAnimate);
  renderer = new THREE.CanvasRenderer();
  let parent;
  if (landscapeMode === true) {
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    parent = document.getElementById("bird-layer");
  } else {
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT * 0.6);
    parent = document.getElementById("container");
  }
  if (parent !== null) {
    const canvas = parent.appendChild(renderer.domElement);
    canvas.style.position = "absolute";
    canvas.style.zIndex = 4;
    canvas.id = "bird-canvas";
  } else {
    const canvas = document.body.appendChild(renderer.domElement);
    canvas.id = "bird-canvas";
  }

  //

  window.addEventListener("resize", onWindowResize, false);

  // repulse to have birds split
  onDocumentMouseMove({
    clientX: Math.random() * SCREEN_WIDTH_HALF + SCREEN_WIDTH,
    clientY: Math.random() * 400 - 200,
  });
}

function addBirds(num) {
  for (let i = 0; i < num; i++) {
    let int = 1;
    boid = boids[i] = new Boid();

    boid.position.x = Math.random() * SCREEN_WIDTH * int + SCREEN_WIDTH * int;
    boid.position.y = Math.random() * 400 - 100;
    boid.position.z = Math.random() * 400 - 200;
    boid.velocity.x = Math.random() * 2 - 1;
    boid.velocity.y = Math.random() * 2 - 1;
    boid.velocity.z = Math.random() * 2 - 1;
    boid.setAvoidWalls(true);
    if (landscapeMode === true) {
      boid.setWorldSize(
        SCREEN_WIDTH + SCREEN_WIDTH,
        SCREEN_HEIGHT,
        200,
        "landscape"
      );
    } else {
      boid.setWorldSize(SCREEN_WIDTH + SCREEN_WIDTH, 250, 400);
    }

    bird = birds[i] = new THREE.Mesh(
      new Bird(),
      new THREE.MeshBasicMaterial({
        color: Math.random() * 0xffffff,
        side: THREE.DoubleSide,
      })
    );
    bird.phase = Math.floor(Math.random() * 62.83);
    bird.position = boids[i].position;
    scene.add(bird);
  }
}

function onWindowResize() {
  camera.aspect = window.innerWidth / (window.innerHeight / 2);
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight / 2);
  if (window.innerWidth > window.innerHeight) {
    renderer.setSize(window.innerWidth, window.innerHeight);
  } else {
    renderer.setSize(window.innerWidth, window.innerHeight * 0.6);
  }
}

function onDocumentMouseMove(event) {
  const vector = new THREE.Vector3(
    event.clientX - SCREEN_WIDTH_HALF,
    -event.clientY + SCREEN_HEIGHT_HALF,
    0
  );

  for (let i = 0; i < boids.length; i++) {
    boid = boids[i];

    vector.z = boid.position.z;

    boid.repulse(vector);
  }
}

//
function animate() {
  setTimeout(function () {
    animationFrame = requestAnimationFrame(animate);
    render();
  });
}

function stopAnimate() {
  cancelAnimationFrame(animationFrame);
}

function render() {
  for (let i = 0; i < birds.length; i++) {
    boid = boids[i];
    boid.run(boids);

    bird = birds[i];

    color = bird.material.color;
    color.r = color.g = color.b = (500 - bird.position.z) / 1000;

    bird.rotation.y = Math.atan2(-boid.velocity.z, boid.velocity.x);
    bird.rotation.z = Math.asin(boid.velocity.y / boid.velocity.length());

    bird.phase = (bird.phase + (Math.max(0, bird.rotation.z) + 0.1)) % 62.83;
    bird.geometry.vertices[5].y = bird.geometry.vertices[4].y =
      Math.sin(bird.phase) * 5;
  }

  renderer.render(scene, camera);
}
