<script setup lang="ts">
import { clsx } from 'clsx'
import type { ButtonHTMLAttributes } from 'vue'

interface ButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
  class?: string
  variant?: 'primary' | 'secondary' | 'outline'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  type: 'button',
})

const baseClasses = 'px-4 py-2 rounded font-medium transition'
</script>

<template>
  <button
    v-bind="props"
    :class="
      clsx(
        baseClasses,
        {
          'cursor-pointer bg-indigo-500 text-white hover:bg-indigo-600 !py-2 !px-6 !mt-6':
            props.variant === 'primary',
          'cursor-pointer bg-gray-200 text-gray-800 hover:bg-gray-300 !py-2 !px-6 !mt-6':
            props.variant === 'secondary',
          'cursor-pointer border border-zinc-400 text-white hover:bg-gray-100 hover:text-black !py-2 !px-5 !mt-6':
            props.variant === 'outline',
        },
        props.class
      )
    "
  >
    <slot />
  </button>
</template>
