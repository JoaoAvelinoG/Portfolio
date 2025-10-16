<script setup lang="ts">
import { clsx } from 'clsx'

interface ContainerProps {
  class?: string
}

const props = defineProps<ContainerProps>()

const baseClasses = 'container !mx-auto p-3 max-w-[1920px]'
</script>

<template>
  <div :class="clsx(baseClasses, props.class)">
    <!-- Children -->
    <slot />
  </div>
</template>
