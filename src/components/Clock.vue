<script setup lang="ts">
import Confetti from './Confetti.vue'
import dayjs from 'dayjs'
import { ref, computed } from 'vue'
import { useNow, useStorage, useToggle } from '@vueuse/core'

const show = ref(false)
const workOver = ref(false)

const now = computed(() => dayjs(useNow().value))
const end = ref('17:30')
useStorage('end-time', end)
const endHour = computed(() => parseInt(end.value.split(':')[0]))
const endMinute = computed(() => parseInt(end.value.split(':')[1]))

const endPoint = computed(() => now.value.hour(endHour.value).minute(endMinute.value).second(0).millisecond(0))

function addZero(n: number) {
  return n < 10 ? '0' + n : n
}

function minusTime(diff: number) {
  const hour = Math.floor(diff / 3600000)
  const minute = Math.floor((diff % 3600000) / 60000)
  const second = Math.floor(((diff % 3600000) % 60000) / 1000)
  const millisecond = Math.floor((((diff % 3600000) % 60000) % 1000))
  return `${addZero(hour)}:${addZero(minute)}:${addZero(second)}:${addZero(millisecond)}`
}

const restTime = computed(() => {
  const diff = endPoint.value.diff(now.value)
  if (diff < 0)
  {
    workOver.value = true
    return '下班了~~~'
  }
  else
    return minusTime(diff)
})


const weekList = [
  '星期日 🤨',
  '星期一 😪',
  '星期二 😓',
  '星期三 😳',
  '星期四 😏',
  '星期五 🤪',
  '星期六 🥳',
]
const weekDay = weekList[parseInt(dayjs().format('d'))]

const edit = useToggle(show)

</script>
<template> 
  <div mt-6>
    <span text-2xl>
      下班倒计时
    </span>
  </div>
  <div max-w-100 m-auto p6 text-left flex="~ col" gap-10>
    <div>
      <div flex leading-loose>
        距离下班
        <button icon-btn mx-2 title="修改" @click="edit()">
          <div i-carbon-edit />
        </button>
        <div v-if="show">
          <el-time-select
            v-model="end"
            start="14:30"
            step="00:30"
            end="23:30"
            placeholder="Select time"
          />
        </div>
      </div>
      <div text-4xl>
        {{ restTime }}
      </div>
    </div>
    <div leading-loose>
      今天是
      <div text-3xl>
        {{ weekDay }}
      </div>
    </div>
    <div leading-loose>
      玩会游戏
      <div>
        <RouterLink icon-btn mx-2 text-3xl title="扫雷" to="/game">
          <div i-carbon-game-console />
        </RouterLink>
      </div>
    </div>
    <div leading-loose>
      随便看看
      <div>
        <RouterLink icon-btn mx-2 text-3xl title="扫雷" to="/relax">
          <div i-carbon-cafe />
        </RouterLink>
      </div>
    </div>
  </div>
  <Confetti :passed="workOver" />
</template>
