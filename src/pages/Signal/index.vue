<template>
  <div>
    <pre>{CANVAS_WIDTH: {{ CANVAS_WIDTH }}, CANVAS_HEIGHT: {{ CANVAS_HEIGHT }}}</pre>
    <div class="canvas-container">
      <canvas id="canvas" ref="canvas" :width="CANVAS_WIDTH" :height="CANVAS_HEIGHT"></canvas>

    </div>
    <input v-model="CANVAS_WIDTH" type="range" min="0" max="10000" />
    <input v-model="CANVAS_HEIGHT" type="range" min="0" max="10000" />
    <input v-model="frequency" type="range" min="0" max="100" />
  </div>
</template>
<script setup>
import { ref, onMounted, } from 'vue'
const [CANVAS_WIDTH, CANVAS_HEIGHT] = [ref (1920), ref (1080)]

const frequency = ref (1)
const amplitude = ref (1)

let canvas, ctx, canvasData = null
let time = 0

function drawPixel (x, y, r, g, b, a) {
  const index = (x + y * CANVAS_WIDTH.value) * 4;
    
  canvasData.data[index + 0] = r;
  canvasData.data[index + 1] = g;
  canvasData.data[index + 2] = b;
  canvasData.data[index + 3] = a;
}

function drawCrossline () {
  ctx.moveTo(0, CANVAS_HEIGHT.value / 2);
  ctx.lineTo(CANVAS_WIDTH.value, CANVAS_HEIGHT.value / 2)
  ctx.moveTo(CANVAS_WIDTH.value / 2, 0);
  ctx.lineTo(CANVAS_WIDTH.value / 2, CANVAS_HEIGHT.value);
  ctx.stroke();
}

function drawCircle (x, y) {
  ctx.beginPath();
  ctx.arc(x, y, 100, 0, 2 * Math.PI);
  ctx.stroke();
}

function init () {
  canvas = document.getElementById('canvas')
  ctx = canvas.getContext('2d')
  canvasData = ctx.getImageData(0, 0, CANVAS_WIDTH.value, CANVAS_HEIGHT.value);
}
function draw () {
  ctx.clearRect(0, 0, CANVAS_WIDTH.value, CANVAS_HEIGHT.value)
  // console.log('draw')
  drawPixel(1, 1, 255, 0, 0, 255)
  drawPixel(2, 2, 255, 0, 0, 255)
  drawPixel(0, 0, 255, 0, 0, 255)
  drawPixel(1, 1, 255, 0, 0, 255)
  drawCrossline(ctx)
  drawCircle (Math.sin                                                                                                                                                                                                           (time * 1.3), 0)
  // console.log(1)
  // ctx.putImageData(canvasData, 0, 0);
  time++
  window.requestAnimationFrame(draw)
} 

onMounted(() => {
  init ()
  draw ()
  ctx.moveTo(2, 2);
  ctx.lineTo(200, 100);
  ctx.stroke();
})
</script>
<style scoped>
#canvas {
  background-color: white;
  border: 1px solid #ddd;
  height: 100%;
}
.canvas-container {
  border: 1px solid red;
  /* width: fit-content; */
  width: max-content;
  width: ;
  max-width: 75%;
  aspect-ratio: 1920 / 1080;
  padding: 1em;
}
</style>