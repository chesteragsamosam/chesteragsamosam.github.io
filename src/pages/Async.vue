<template>
    <div id="ballContainer"><div id="ball"></div></div>
    
    <li v-for="r in ret">{{r}}</li>
    <div class="grid grid-cols-2 gap-4 mt-4">
        <div>
            <div class="px-4 py-2 text-white bg-red-500">Sync: 5</div>
            <li class="px-4">{{ a1 }}</li>
            <li class="px-4">{{ a2 }}</li>
            <li class="px-4">{{ a3 }}</li>
            <li class="px-4">{{ a4 }}</li>
            <li class="px-4">{{ a5 }}</li>
        </div>
        <div>
            <div class="px-4 py-2 text-white bg-blue-500">Async: 5</div>
            <li class="px-4">{{ b1 }}</li>
            <li class="px-4">{{ b2 }}</li>
            <li class="px-4">{{ b3 }}</li>
            <li class="px-4">{{ b4 }}</li>
            <li class="px-4">{{ b5 }}</li>
        </div>
        <div>
            <button class="px-2 py-1 border rounded" @click="btn1()">Fetch</button>
            <div class="px-4 py-2 text-white bg-red-500">Sync: {{ users1.length }}</div>
            <li v-for="user in users1" class="px-4">{{ user }}</li>
        </div>
        <div>
            <button class="px-2 py-1 border rounded" @click="btn2()">Fetch</button>
            <div class="px-4 py-2 text-white bg-blue-500">Async: {{ users2.length }}</div>
            <li v-for="user in users2" class="px-4">{{ user }}</li>
        </div>
    </div>
</template>

<script setup>
console.log('Async.vue')
import { onBeforeMount, onMounted, ref, computed } from 'vue';
const users1 = ref([])
const users2 = ref([])
const startTime = (new Date()).getTime()

const time = ref(0)
const timer = setInterval(() => {
    const diff = (new Date()).getTime() - startTime
    const sec = Math.floor(diff / 1000) % 60
    const min = Math.floor(diff / (1000 * 60)) % 60
    const hour = Math.floor(diff / (1000 * 60 * 60)) % 24
    time.value = `${hour}:${min}:${sec}`
}, 1000);
const randFetch = (param1, param2) => new Promise((res, rej) => {
    const rand = Math.floor(Math.random() * 5 * 1000)
    if (param1 === '1') loading1.value = true
    if (param1 === '2') loading2.value = true
    console.log('fetching ' + param1 + ':' + param2 + ' ' + rand)
    setTimeout(() => {
        console.log('fetched ' + param1 + ':' + param2 + ' ' + rand)
        if (param1 === '1') loading1.value = false
        if (param1 === '2') loading2.value = false
        res( param1 + ': ' + rand)
    }, rand)
})
const loading1 = ref(false)
const loading2 = ref(false)

const getUser = () => fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json())
async function btn1() {
    console.log('btn1 start')
    for(let i = 0; i < 10; i++) {
        users1.value[i] = 'N/A'
    }
    for(let i = 0; i < 10; i++) {
        users1.value[i] = 'Loading...'
        users1.value[i] = await randFetch('1', i)
    }
    console.log('btn1 end')
}

function btn2() {
    console.log('btn2 start')
    for(let i = 0; i < 10; i++) users2.value[i] = '------'
    users2.value[0] = 'Loading...'
    randFetch('1', '0').then(res => users2.value[0] = res)
    users2.value[1] = 'Loading...'
    randFetch('1', '1').then(res => users2.value[1] = res)
    users2.value[2] = 'Loading...'
    randFetch('1', '2').then(res => users2.value[2] = res)
    users2.value[3] = 'Loading...'
    randFetch('1', '3').then(res => users2.value[3] = res)
    users2.value[4] = 'Loading...'
    randFetch('1', '4').then(res => users2.value[4] = res)
    users2.value[5] = 'Loading...'
    randFetch('1', '5').then(res => users2.value[5] = res)
    users2.value[6] = 'Loading...'
    randFetch('1', '6').then(res => users2.value[6] = res)
    users2.value[7] = 'Loading...'
    randFetch('1', '7').then(res => users2.value[7] = res)
    users2.value[8] = 'Loading...'
    randFetch('1', '8').then(res => users2.value[8] = res)
    users2.value[9] = 'Loading...'
    randFetch('1', '9').then(res => users2.value[9] = res)
    console.log('btn2 end')
}
const a1 = ref('---')
const a2 = ref('---')
const a3 = ref('---')
const a4 = ref('---')
const a5 = ref('---')
const b1 = ref('---')
const b2 = ref('---')
const b3 = ref('---')
const b4 = ref('---')
const b5 = ref('---')

onMounted(() => {
// Set up the ball
var ball = document.getElementById("ball");

// Set up the ball's initial position and velocity
var x = 0;
var y = 0;
var vx = 0.0001;
var vy = 0.0001;

// Set up the ball's acceleration due to gravity
var ay = 9.81;

// Set up the ball's coefficient of restitution (bounciness)
var cor = 0.8;

// Set up the ball's mass
var mass = 1;
var radius = 25;
// Function to update the ball's position and velocity
function update() {
  // Update the ball's position based on its velocity
  x += vx;
  y += vy;
  // Update the ball's velocity based on its acceleration
  vy += ay;

  // If the ball hits the ground, bounce it
  if (y > 500) {
    // Calculate the ball's new velocity after the bounce
    vy = -vy * cor;

    // Calculate the ball's energy loss after the bounce
    var energyLoss = mass * vy * vy * (1 - cor);

    // Update the ball's velocity based on the energy loss
    vy -= energyLoss / mass;

    // Set the ball's y position to the ground
    y = 0;
  }

  // Update the ball's position on the screen
  ball.style.left = x + "px";
  ball.style.top = y + "px";
  console.log(  ball.style.left,   ball.style.top)
}

// Set up the interval to update the ball's position and velocity
setInterval(update, 50);
    (async () => {
        a1.value = 'Loading...'
        a1.value = await randFetch('a', 'a1')
        a2.value = 'Loading...'
        a2.value = await randFetch('a', 'a2')
        a3.value = 'Loading...'
        a3.value = await randFetch('a', 'a3')
        a4.value = 'Loading...'
        a4.value = await randFetch('a', 'a4')
        a5.value = 'Loading...'
        a5.value = await randFetch('a', 'a5')
        return 'a is done'
    })();
    (() => {
        b1.value = 'Loading...'
        randFetch('b', '1').then(res =>  res)
        b2.value = 'Loading...'
        randFetch('b', '2').then(res =>  res)
        b3.value = 'Loading...'
        randFetch('b', '3').then(res =>  res)
        b4.value = 'Loading...'
        randFetch('b', '4').then(res =>  res)
        b5.value = 'Loading...'
        randFetch('b', '5').then(res =>  res)
    })();
})
const fetchGrade = (grade, t) => new Promise((res, rej) => {
    if (!grade) grade = Math.random()
    console.log('checking:', grade)
    setTimeout(() => {
        if (grade > 0.05) res(grade + ': Passed')
        rej(grade + ': Failed')
    }, t || Math.random() * 5000)
})
const ret = ref(['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', ])
const gs = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.0]
const fetchAll = () => {
    const res = Promise.all([
        fetchGrade('0.1'),
        fetchGrade('0.2'),
        fetchGrade('0.3'),
        fetchGrade('0.4'),
        fetchGrade('0.5'),
        fetchGrade('0.6'),
        fetchGrade('0.7'),
        fetchGrade('0.8'),
        fetchGrade('0.9'),
        fetchGrade('0.7'),
    ]).then(_ => _).catch(_ => _)
    return res
}
let asyncRand = async (grade) => {
    setTimeout(() => {
        if (!grade) grade = Math.random()
        if (grade > 0.05) return Promise.resolve(grade + ': Passed')
        return Promise.reject(grade + ': Failed')
    }, Math.random() * 5000)
    return Promise.resolve(grade + ': Passed') 
}
let myProm = new Promise((a, b) => {
    setTimeout(() => a('asd'), 7000)
});
(async () => {
    console.log('start')
    console.log(await myProm)
    console.log('done')
})()
</script>

<style lang="scss">
.container {
    margin: 0 !important;
    padding: 0 !important;
}
#ballContainer {
    top: 0px;
left: 0px;
  position: relative;
  width: 500px;
  height: 500px;
  border: 1px solid black;
}

#ball {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: red;
}
</style>