/* hero background > particles */
const bgCanvas = document.getElementById("bg-canvas");
const bgCtx = bgCanvas.getContext("2d");
let bgParticles = [];

function initBg() {
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
  bgParticles = [];
  for (let i = 0; i < 60; i++) {
    bgParticles.push({
      x: Math.random() * bgCanvas.width,
      y: Math.random() * bgCanvas.height,
      r: Math.random() * 1.5,
      d: Math.random() * Math.PI * 2,
      v: Math.random() * 0.2 + 0.1,
    });
  }
}
function drawBg() {
  bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
  bgCtx.fillStyle = "rgba(79, 195, 247, 0.3)";
  bgParticles.forEach((p) => {
    p.x += Math.cos(p.d) * p.v;
    p.y += Math.sin(p.d) * p.v;
    if (p.x < 0) p.x = bgCanvas.width;
    if (p.x > bgCanvas.width) p.x = 0;
    if (p.y < 0) p.y = bgCanvas.height;
    if (p.y > bgCanvas.height) p.y = 0;
    bgCtx.beginPath();
    bgCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    bgCtx.fill();
  });
}

const spCanvas = document.getElementById("sphere-canvas");
const spCtx = spCanvas.getContext("2d");
let points = [];
const GLOBE_RADIUS = 550;
const NODE_COUNT = 250;
const CONNECTION_DIST = 100;
let angleY = 0;
let angleX = 0;

function initSphere() {
  spCanvas.width = window.innerWidth;
  spCanvas.height = window.innerHeight;
  points = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < NODE_COUNT; i++) {
    const y = 1 - (i / (NODE_COUNT - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * radius;
    const z = Math.sin(theta) * radius;
    points.push({
      x: x * GLOBE_RADIUS,
      y: y * GLOBE_RADIUS,
      z: z * GLOBE_RADIUS,
    });
  }
}

function drawSphere() {
  spCtx.clearRect(0, 0, spCanvas.width, spCanvas.height);
  const cx = spCanvas.width / 2;
  const cy = spCanvas.height * 0.9;
  angleY += 0.001;
  angleX = 0.1;

  let projectedPoints = points.map((p) => {
    let x1 = p.x * Math.cos(angleY) - p.z * Math.sin(angleY);
    let z1 = p.x * Math.sin(angleY) + p.z * Math.cos(angleY);
    let y1 = p.y * Math.cos(angleX) - z1 * Math.sin(angleX);
    let z2 = p.y * Math.sin(angleX) + z1 * Math.cos(angleX);
    const scale = 1000 / (1000 + z2);
    return {
      x: x1 * scale + cx,
      y: y1 * scale + cy,
      z: z2,
      scale: scale,
    };
  });

  spCtx.lineWidth = 0.3;
  for (let i = 0; i < projectedPoints.length; i++) {
    const p1 = projectedPoints[i];
    if (p1.scale < 0.6) continue;
    for (let j = i + 1; j < projectedPoints.length; j++) {
      const p2 = projectedPoints[j];
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONNECTION_DIST) {
        const alpha = (1 - dist / CONNECTION_DIST) * 0.9;
        spCtx.strokeStyle = `rgba(140, 230, 230, ${alpha})`;
        spCtx.beginPath();
        spCtx.moveTo(p1.x, p1.y);
        spCtx.lineTo(p2.x, p2.y);
        spCtx.stroke();
      }
    }
    spCtx.fillStyle = `rgba(90, 108, 125, ${p1.scale - 0.2})`;
    spCtx.beginPath();
    spCtx.arc(p1.x, p1.y, 1.5 * p1.scale, 0, Math.PI * 2);
    spCtx.fill();
  }
}

function loop() {
  drawBg();
  drawSphere();
  requestAnimationFrame(loop);
}
window.addEventListener("resize", () => {
  initBg();
  initSphere();
});
initBg();
initSphere();
loop();
