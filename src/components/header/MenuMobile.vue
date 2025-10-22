<script setup lang="ts">
import Container from '../layout/Container.vue'
import { ArrowUpRightIcon } from 'lucide-vue-next'
import type { Link } from '../../@types/link'

defineProps<{
  isOpen: boolean
  links: Link[]
}>()

const emit = defineEmits<{
  (e: 'scroll-to', refName: string): void
}>()

// Função para clicar no item do menu
function handleClick(refName: string) {
  emit('scroll-to', refName)
}
</script>

<template>
  <Container class="!px-4 flex lg:hidden justify-end relative z-50">
    <div
      :class="[
        'menu-mobile text-sm fixed top-16 right-0 bg-white shadow-xl rounded-l-xl overflow-hidden',
        isOpen ? 'w-full max-w-xs opacity-100 translate-x-0' : 'w-0 opacity-0 -translate-x-full',
      ]"
    >
      <div class="flex flex-col divide-y divide-zinc-200 !p-3">
        <div
          v-for="link in links"
          :key="link.refName"
          class="menu-item flex justify-between items-center !px-8 !py-6 hover:bg-zinc-50 cursor-pointer transition"
          @click="handleClick(link.refName)"
        >
          <span class="text-zinc-900 font-medium">{{ link.title }}</span>
          <ArrowUpRightIcon class="text-amber-500" :size="18" />
        </div>
      </div>
    </div>
  </Container>
</template>
