<template>
    <div>
        <button @click="reset()" class="px-2 py-1 mr-2 bg-gray-200 rounded shadow">RESET</button>
        <button @click="start()" class="px-2 py-1 mr-2 bg-gray-200 rounded shadow">START</button>
        <div class="battlefield">
            <div :id="'pl-' + i" v-for="(plyr, i) in plyrs" class="player">
                <div class="player-icon" :style="`background-color: #${plyr.color}`"></div>
                <div class="font-mono player-name">{{ plyr.color }}</div>
            </div>
        </div>
    </div>
</template>

<script>
console.log('Race.vue')
import anime from 'animejs/lib/anime.es.js';
function randRGB () {
    let val = Math.floor(Math.random() * 16777216).toString(16)
    let missing0 = 6 - val.length
    for (let i = 0; i < missing0; i++) val = '0' + val
    return val;
} 

export default {
    data () {
        return {
            nOfPlayers: 8,
            plyrs: [],
            timer: null,
        }
    },
    mounted () {
        console.log('mounted')
        this.init()
    },
    methods: {
        init () {
            console.log('init')
            this.randomPLayers()
            this.reset()
            console.log(this.plyrs)
            this.start()
        },
        randomPLayers () {
            this.plyrs = [...Array(this.nOfPlayers)].map((_, i) => {
                return {
                    color: randRGB(),
                    translateX: 0,
                }
            })
        },
        reset () {
            clearInterval(this.timer)
            this.plyrs.forEach((el, i) => {
                var elDom = document.getElementById('pl-' + i);
                el.translateX = 0
                anime({
                    targets: elDom,
                    translateX: 0
                });
            })
        },
        move () {
            return Math.floor(Math.random() * 10) + 100
        },
        start () {
            this.timer = setInterval (() => this.update(), 1000)
        },
        update () {
            this.plyrs.forEach((el, i) => {
                var elDom = document.getElementById('pl-' + i);
                el.translateX += this.move()
                anime({
                    targets: elDom,
                    translateX: el.translateX,
                    easing: 'linear',
                    duration: 1000
                });
            })
        },

    }
}
</script>

<style lang="scss" scoped>
.player {
    display: flex;
    align-items: center;
}
.player-icon {
    display: inline-block;
    aspect-ratio: 1;
    width: 24px;
    height: 24px;
    margin: 12px 0;
}
.player-name {
    display: inline-block;
}
</style>