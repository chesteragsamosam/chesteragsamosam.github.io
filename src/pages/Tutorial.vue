<template>
    <div>
        <div v-if="stepNo" @click="tNext()" class="overlay-background">
            <div>

            </div>
            <div class="">
                <button class="overlay-click-area" @click="resetTutorial">Skip</button>
            </div>
        </div>
        <button @click="tNext()">Start Tutorial</button>
        v                                                                                                                                                                                                                                                         
    </div>
</template>
<script>
console.log('Tutorial.vue')
export default {
    data () {
        return {
        }
    },
    methods: {
        tNext () {
            document.getElementById('t' + this.stepNo) && document.getElementById('t' + this.stepNo).classList.remove('tutorial-focus')
            this.stepNo += 1
            if (this.stepNo === 11) {
                this.stepNo = 0
                return
            }
            const targetEl = document.getElementById('t' + this.stepNo)
            targetEl.scrollIntoView(false);
            console.log(targetEl) 
            targetEl.classList.add('tutorial-focus')
        },
        resetTutorial (e) {
            e.stopPropagation()
            this.stepNo = 0
            console.log('resetted')
        },
    }
}
</script>
<style class="scoped">
.main {
    margin: 200em 4em;
    padding: 1em 2em;
    background: #77f;
    border-radius: 2em;
}
body {
    z-index: -2;
    margin: 0;
    background-color: #f88;
}
.content {
    margin: 1em;
    padding: 1em;
    background-color: #eee;
    border-radius: 1em;
    box-shadow: 4em;
}
.article {
    background-color: #e8e8e8;
    padding: 0.5em 1em;
}
.s {
    background-color: #f88;
}
.overlay-background {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    opacity: 0.7;
    background-color: #000;
}
.overlay-click-area {
    position: absolute;
    margin-top: auto;
    opacity: 0.7;
    color: white;
    z-index: 99;
}
.tutorial-focus {
    position: relative;
    z-index: 1;
}
</style>
