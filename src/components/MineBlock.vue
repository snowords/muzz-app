<script setup lang="ts">

interface BlockState {
  x: number
  y: number
  revealed: boolean
  mine?: boolean
  flagged?: boolean
  adjacentMines: number
}

defineProps<{ block: BlockState }>()

const emit = defineEmits<{
  (e: 'lrclick', event: MouseEvent): void
}>()

function whichButtons(event: MouseEvent) {
  if (event.buttons === 3)
    emit('lrclick', event)
}

const numberColors = [
  'text-transparent',
  'text-blue-500',
  'text-green-500',
  'text-yellow-500',
  'text-orange-500',
  'text-red-500',
  'text-purple-500',
  'text-pink-500',
  'text-teal-500',
]

function getBlockClass(block: BlockState) {
  if (block.flagged)
    return 'bg-gray-500/30'
  if (!block.revealed)
    return 'bg-gray-500/30 hover:bg-gray-500/50'

  return block.mine
    ? 'bg-red-500/50'
    : numberColors[block.adjacentMines]
}
</script>

<template>
  <button
    flex="~"
    items-center justify-center
    min-w-8 min-h-8 m="1px"
    border="0.5 gray-400/20"
    :class="getBlockClass(block)"
    class="bg-gray-500/10"
    @mousedown="whichButtons"
  >
    <template v-if="block.flagged">
      <div i-carbon-flag-filled text-red />
    </template>
    <template v-else-if="block.revealed">
      <div v-if="block.mine" i-carbon-uv-index-filled />
      <div v-else font-600>
        {{ block.adjacentMines }}
      </div>
    </template>
  </button>
</template>
