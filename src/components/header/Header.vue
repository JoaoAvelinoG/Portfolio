<script setup lang="ts">
import { ref } from 'vue'
import { useDevice } from '../../composables/useDevice'
import { MenuIcon } from 'lucide-vue-next'
import Container from '../layout/Container.vue'
import Logo from '../commons/logo/Logo.vue'
import type { Link } from '../../@types/link'
import MenuMobile from './MenuMobile.vue'

const { isMobile, isTablet, isDesktop } = useDevice()
const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)

const props = defineProps<{
  class?: string
  links: Link[]
}>()

const emit = defineEmits<{
  (e: 'scroll-to', refName: string): void
}>()

// Função para clicar no menu mobile
function handleMobileScroll(refName: string) {
  emit('scroll-to', refName) // envia para o pai (App.vue)
  isOpen.value = false // fecha o menu
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    <Container>
      <div class="header !py-2 !px-4 md:!px-8">
        <div class="header-wrapper flex justify-between items-center">
          <div class="logo">
            <Logo />
          </div>

          <!-- Menu Desktop -->
          <div v-if="isDesktop" class="links flex gap-8 text-zinc-500">
            <button
              v-for="link in props.links"
              :key="link.title"
              class="font-light cursor-pointer hover:text-indigo-500 transition bg-transparent border-none"
              @click="emit('scroll-to', link.refName)"
            >
              {{ link.title }}
            </button>
          </div>

          <!-- Menu Mobile -->
          <div v-if="isMobile || isTablet">
            <MenuIcon @click="toggleMenu" class="cursor-pointer" />
          </div>
        </div>
      </div>
    </Container>

    <!-- Menu Mobile -->
    <MenuMobile :isOpen="isOpen" :links="props.links" @scroll-to="handleMobileScroll" />
  </header>
</template>
