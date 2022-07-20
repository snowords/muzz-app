<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
<template>
  <nav text-xl>
    <RouterLink class="icon-btn mx-2" title="首页" to="/home">
      <div i-carbon-home />
    </RouterLink>
    <button class="icon-btn mx-2 !outline-none" title="切换暗黑模式" @click="toggleDark()">
      <div i="carbon-haze dark:carbon-haze-night" />
    </button>
  </nav>
</template>