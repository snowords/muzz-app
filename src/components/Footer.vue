<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>
<template>
  <button class="icon-btn mx-2 !outline-none" title="切换暗黑模式" @click="toggleDark()">
    <div i="carbon-sun dark:carbon-moon" />
  </button>
  <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/snowords/muzz-studio" target="_blank" title="GitHub">
    <div i-carbon-logo-github />
  </a>
</template>