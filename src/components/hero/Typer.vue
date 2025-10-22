<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface TyperProps {
  texts: string[]
  typeDelay?: number
  eraseDelay?: number
  pauseDelay?: number
  loop?: boolean
}

const props = withDefaults(defineProps<TyperProps>(), {
  typeDelay: 100,
  eraseDelay: 50,
  pauseDelay: 1500,
  loop: true,
})

const displayText = ref('')
const textIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)

function type() {
  const currentText = props.texts[textIndex.value] ?? ''

  if (!isDeleting.value) {
    // Escrevendo
    displayText.value = currentText.substring(0, charIndex.value + 1)
    charIndex.value++

    if (charIndex.value === currentText.length) {
      // Pausa antes de apagar
      setTimeout(() => (isDeleting.value = true), props.pauseDelay)
    }
  } else {
    // Apagando
    displayText.value = currentText.substring(0, charIndex.value - 1)
    charIndex.value--

    if (charIndex.value === 0) {
      isDeleting.value = false
      textIndex.value++

      if (textIndex.value >= props.texts.length) {
        if (props.loop) {
          textIndex.value = 0
        } else {
          return
        }
      }
    }
  }

  const delay = isDeleting.value ? props.eraseDelay : props.typeDelay
  setTimeout(type, delay)
}

onMounted(() => {
  type()
})
</script>

<template>
  <span class="text-[#f1f1f1]">
    {{ displayText }}
  </span>
  <span class="ml-1 border-r-2 border-indigo-600 animate-pulse"></span>
</template>
