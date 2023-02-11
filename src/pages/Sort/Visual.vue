<template>
	<div class="canvas-container">
		<button @click="doShuffle">Shuffle</button>
		<button @click="reset">Reset</button>
		<Draggable
        class="list-group"
        item-key="order"
        tag="transition-group"
        :component-data="{ tag: 'ul', name: 'flip-list', type: 'transition' }"
        v-model="list"
        v-bind="{
        animation: 0,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
				}"
        @start="isDragging = true"
        @end="isDragging = false"
				:style="{ 'min-width': (list.length + 12) + 'px' }"
      >
        <template #item="{ element }">
          <li class="list-group-item" :style="{ height: (element.name / list.length * 100) + '%', width: (1 / list.length * 100) + '%'}">
            <i
              @click="element.fixed = !element.fixed"
              aria-hidden="true"
            ></i>
          </li>
        </template>
      </Draggable>
	</div>
</template>

<script setup>
import Draggable from "vuedraggable";
import { ref } from "vue";
import Element from './Element'
let canvas = ref(null)

function safeShuffle (orig) {
	const arr = [...orig]
	for (let i = arr.length; i > 0; i--) {
		arr.push(arr.splice(Math.floor(Math.random() * i), 1)[0])
	}
	return arr
}
function shuffle (arr) {
	for (let i = arr.length; i > 0; i--) {
		arr.push(arr.splice(Math.floor(Math.random() * i), 1)[0])
	}
}
let sleep = (time = 500, val) => new Promise(res => {
	setTimeout(() => res(val), time)
})
const animatedShuffle = async (arr) => {
	for (let i = arr.length; i > 0; i--) {
		let timer = arr.push(arr.splice(Math.floor(Math.random() * i), 1)[0])
		await sleep(700)
	}
}

const e1 = new Element(3)
const elements = (new Array(10).fill()).map(_ => Math.floor(Math.random() * 8))
const straight = (new Array(60).fill()).map((x, i) => i)
const list = ref()
const initialList = straight.map(x => {return { order: x, name: x + 1}})
list.value = [...initialList]
console.log("e1", e1.value, elements, straight);
console.log('safeShuffle', safeShuffle(straight))
console.log('straight:', straight)
const doShuffle = () => {
	shuffle(list.value)
}
const reset = () => {
	list.value = [...initialList]
	console.log(initialList)
} 
const straightCopy = straight
let counts = {}
for (let i = 0; i < 100; i++) {
	const cur = safeShuffle(straight)
	if (counts[cur]) {
		counts[cur]++
	} else counts[cur] = 1
} 
</script>
<style>
.canvas-container {
	@apply border;
}
.canvas {
	@apply border border-black;
}
.list-group-item {
	flex-shrink: 1;
	flex-grow: 0;
	font-size: 8px;
	padding: 0.5em;
	text-align: center;
	vertical-align: baseline;
	@apply border p-0 m-0 text-gray-200 bg-red-600;
}
.list-group {
	display: flex;
	flex-flow: row;
	height: 180px;
	width: 100%;
	@apply items-end border rounded-none bg-gray-50 p-1;
}

.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
</style>
