<script setup lang="ts">
import MenuMobile from './MenuMobile.vue'

import { useDevice } from '../../composables/useDevice'

import type { Link } from '../../@types/link'

import { MenuIcon } from 'lucide-vue-next'
import { XIcon } from 'lucide-vue-next'
import { ref } from 'vue'

const { isMobile, isTablet, isDesktop } = useDevice()

const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)

defineProps<{
  links: Link[]
}>()
</script>

<template>
  <!-- Header -->
  <header class="!px-4 md:!px-0">
    <div class="header !py-6 !px-8">
      <div class="header-wrapper flex justify-between items-center">
        <div class="logo">...</div>
        <!-- Menu Desktop -->
        <div v-if="isDesktop" class="links flex gap-8">
          <a class="font-medium" v-for="link in links" :key="link.title" :href="link.url">
            {{ link.title }}
          </a>
        </div>

        <!-- Menu Mobile -->
        <div v-if="isMobile || isTablet">
          <transition name="icon-fade" mode="out-in">
            <MenuIcon v-if="!isOpen" key="menu" class="cursor-pointer" @click="toggleMenu" />
            <XIcon v-else key="close" class="cursor-pointer" @click="toggleMenu" />
          </transition>
        </div>
      </div>
    </div>
  </header>
  <!-- Modal Menu Mobile -->
  <MenuMobile :isOpen="isOpen" />
</template>

<style scoped>
/* Se você quiser manter a transição de fade para outros ícones */
.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: transform 0.2s ease, opacity 0.1s ease;
}
.icon-fade-enter-from,
.icon-fade-leave-to {
  transform: scale(0);
  opacity: 0.3;
}
.icon-fade-enter-to,
.icon-fade-leave-from {
  transform: scale(1);
  opacity: 1;
}
</style>
