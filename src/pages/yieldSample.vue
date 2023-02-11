<template>
    <div>
        <span class="text-red-500">Test</span>
        <span>{{ data }}</span>
        <span>{{ name }}</span>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const data = ref(1)
const name = ref('Chester')
async function* getNum () {
    let cur = 0
    while(cur < 600){
        let res = await fetch("https://www.randomnumberapi.com/api/v1.0/random?min=1&max=1000&count=1")
        res = await res.json()
        cur = res[0 ]
        yield cur
    }
}
onMounted (async () =>  {
    const ad = await getNum()
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
    data.value = (await ad.next()).value
})
</script>