<template>
  <div class="grid w-32 h-32 grid-cols-3">
    <div v-for="(cell, i) of gameBoard" :key="'c-' + i"
      class="border"
      @click="change(i)"
    >
      {{ cell }}
    </div>
  </div>
    TicTacToe
    {{ humanifyBoard }}  <button class="border" @click="getBestScore">Compute</button>
</template>
<script setup>
import { TicTacToe } from '../../utils/TicTacToe'
import { ref, computed } from 'vue'
const newBoard = new TicTacToe()
const gameBoard = ref([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '])
const reset = () => {
  gameBoard.value = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
}
const change = (idx) => {
  const currentVal = gameBoard.value[idx]
  gameBoard.value[idx] = currentVal === ' ' ? 'X' : currentVal === 'X' ? 'O' : ' '
}
const stringifyBoard = (board) => {
  return board.join('')
}
const humanifyBoard = computed(() => {
  return gameBoard.value.map(x => x === ' ' ? '_' : x).join('')
})
const getBestScore = () => {
  const board = (new TicTacToe(stringifyBoard(gameBoard.value)))
  console.log(board.getBestChild())
}
</script>
<style>
</style>