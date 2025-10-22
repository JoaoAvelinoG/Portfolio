<script setup lang="ts">
import type { Component } from 'vue'

const props = defineProps<{
  skillTitle: string
  icon?: Component
}>()
</script>

<template>
  <div class="flex flex-col items-center gap-3 !pb-12 text-center">
    <component :is="props.icon" class="w-8 h-8 text-[#615FFF]" />
    <h3 class="text-sm md:text-lg font-medium text-zinc-700">{{ props.skillTitle }}</h3>
  </div>
</template>
