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
    <div class="workedIn__wrapper flex flex-col items-center 2xl:flex-row gap-4 !p-12">
      <div class="workedIn__image lg:!mr-4 w-22 h-22 md:w-30 md:h-30">
        <img
          :src="props.enterpriseImg ? props.enterpriseImg : 'https://placehold.co/400'"
          :alt="props.enterpriseName"
          class="w-full h-full object-contain"
        />
      </div>

      <div class="workedIn__card flex flex-col gap-2 w-full">
        <div
          class="workedIn__card-period text-center md:text-start text-sm font-medium !mt-5 text-[#615FFF]"
        >
          {{ props.startIn }} - {{ props.ended }}
        </div>

        <div
          class="workedIn__card-position text-center md:text-start text-lg text-zinc-800 font-semibold !mt-2"
        >
          {{ props.enterpriseName }}
        </div>

        <div
          class="workedIn__card-description !mt-4 lg:!mt-1 text-justify leading-relaxed md:leading-normal w-full text-zinc-500 text-xs md:text-base overflow-hidden"
        >
          {{ props.enterpriseDescription }}
        </div>
      </div>
    </div>
  </div>
</template>
