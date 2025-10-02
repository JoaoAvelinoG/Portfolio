<script setup lang="ts">
import Container from '../layout/Container.vue'
import { ArrowUpRightIcon } from 'lucide-vue-next'

defineProps<{
  isOpen: boolean
}>()
</script>

<template>
  <Container class="!px-7 flex lg:hidden justify-end">
    <div :class="isOpen ? `menu-mobile w-full max-w-full md:max-w-7/12` : `hidden`">
      <div class="menu-mobile__wrapper !p-4 w-full border-b border-zinc-300">
        <div
          class="menu-mobile__header flex justify-between items-center text-zinc-900 cursor-pointer"
        >
          <div>Testando</div>
          <div>
            <ArrowUpRightIcon class="text-amber-500" :size="18" />
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
