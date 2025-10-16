<script setup lang="ts">
import { useAttrs } from 'vue'

const props = defineProps<{
  startIn: number
  ended: number
  enterpriseName: string
  enterpriseImg?: string
  enterpriseDescription: string
}>()

// Pega atributos herdados (class, style, etc.)
const attrs = useAttrs()
</script>

<template>
  <div
    :class="[
      'workedIn',
      'border',
      'border-zinc-300',
      'rounded-lg',
      'shadow-md',
      'p-4',
      'bg-white',
      attrs.class,
    ]"
  >
    <div class="workedIn__wrapper flex flex-col items-center md:flex-row gap-4 !p-12">
      <div class="workedIn__image w-30 h-30">
        <img
          :src="props.enterpriseImg ? props.enterpriseImg : 'https://placehold.co/400'"
          :alt="props.enterpriseName"
          class="w-full h-full object-contain"
        />
      </div>

      <div class="workedIn__card flex flex-col gap-2">
        <div class="workedIn__card-period text-sm text-gray-500">
          {{ props.startIn }} - {{ props.ended }}
        </div>

        <div class="workedIn__card-position text-lg font-semibold">
          {{ props.enterpriseName }}
        </div>

        <div class="workedIn__card-description w-full md:w-[400px] text-gray-700 text-sm">
          {{ props.enterpriseDescription }}
        </div>
      </div>
    </div>
  </div>
</template>
