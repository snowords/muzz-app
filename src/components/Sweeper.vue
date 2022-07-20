<script setup lang="ts">
// import { isDev, toggleDev } from '~/composables'
import MineBlock from './MineBlock.vue'
import Confetti from './Confetti.vue'
import { computed, ref, watchEffect } from 'vue'
import { useNow, useStorage } from '@vueuse/core'
import { GamePlay } from '../hooks/logic'

const play = new GamePlay(9, 9, 10)

const now = ref(useNow())
const timerMS = computed(() => Math.round(((play.state.value.endMS ?? +now.value) - (play.state.value.startMS ?? +now.value)) / 1000))

useStorage('vuesweeper-state', play.state)
const state = computed(() => play.board)

const mineRest = computed(() => {
  if (!play.state.value.mineGenerated)
    return play.mines
  return play.blocks.reduce((a, b) => a - (b.flagged ? 1 : 0), play.mines)
})

function newGame(difficulty: 'easy' | 'medium' | 'hard') {
  switch (difficulty) {
    case 'easy':
      play.reset(9, 9, 10)
      break
    case 'medium':
      play.reset(16, 16, 40)
      break
    case 'hard':
      play.reset(16, 30, 99)
      break
  }
}

watchEffect(() => {
  play.checkGameState()
})
</script>

<template>
  <div>
    <div mt-6>
      <span colorful-text >
        扫雷
      </span>
    </div>
    <div flex="~ gap1" justify-center p4>
      <button btn @click="play.reset()">
        新游戏
      </button>
      <button btn @click="newGame('easy')">
        简单
      </button>
      <button btn @click="newGame('medium')">
        中等
      </button>
      <button btn @click="newGame('hard')">
        困难
      </button>
    </div>

    <div flex="~ gap-10" justify-center>
      <div font-mono text-2xl flex="~ gap-1" items-center>
        <div i-carbon-timer />
        {{ timerMS }}
      </div>
      <div font-mono text-2xl flex="~ gap-1" items-center>
        <div i-mdi-mine />
        {{ mineRest }}
      </div>
    </div>

    <div p5 w-full overflow-auto>
      <div
        v-for="row, y in state"
        :key="y"
        flex="~"
        items-center justify-center w-max ma
        class="bg-gray-500/20"
      >
        <MineBlock
          v-for="block, x in row" :key="x"
          :block="block"
          @click="play.onClick(block)"
          @lrclick="play.autoExpand(block)"
          @contextmenu.prevent="play.onRightClick(block)"
        />
      </div>
    </div>

    <!-- <div flex="~ gap-1" justify-center>
      <button btn @click="toggleDev()">
        {{ isDev ? 'DEV' : 'NORMAL' }}
      </button>
    </div> -->

    <Confetti :passed="play.state.value.status === 'won'" />
  </div>
</template>
