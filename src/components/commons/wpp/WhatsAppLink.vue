<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import WhatsAppIcon from '../icons/WhatsAppIcon.vue'

// Estado para controlar visibilidade do botão
const isVisibleWppIcon = ref(false)

// Função para checar scroll
const handleScroll = () => {
  if (window.scrollY > 400) {
    isVisibleWppIcon.value = true
  } else {
    isVisibleWppIcon.value = false
  }
}

// Lifecycle hooks do Vue
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Mensagem e link do WhatsApp
const message = 'Olá, tudo bem?'

const linkZap = computed(() => {
  return `https://wa.me/${import.meta.env.VITE_PUBLIC_ZAP}?text=${encodeURIComponent(message)}`
})
</script>

<template>
  <a
    :href="linkZap"
    target="_blank"
    rel="noopener noreferrer"
    class="cursor-pointer fixed bottom-6 right-6 z-50 flex items-center bg-[#25D366] shadow-lg justify-center w-13 h-13 rounded-full transition-all duration-700 hover:-translate-y-1 ease-in-out"
    :class="{
      'opacity-100 translate-y-0': isVisibleWppIcon,
      'opacity-0 translate-y-10': !isVisibleWppIcon,
    }"
  >
    <WhatsAppIcon />
  </a>
</template>
