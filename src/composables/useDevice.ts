import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useDevice() {
  // Breakpoints padrão (pode ajustar conforme necessidade)
  const BREAKPOINTS = {
    mobile: 640, // até 640px
    tablet: 1024, // até 1024px
    desktop: 1440, // acima de 1024px
  }

  // Estado reativo da largura da tela
  const width = ref(window.innerWidth)

  // Atualiza a largura quando a tela muda
  const onResize = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', onResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })

  // Computed para cada tipo de dispositivo
  const isMobile = computed(() => width.value < BREAKPOINTS.mobile)
  const isTablet = computed(
    () => width.value >= BREAKPOINTS.mobile && width.value < BREAKPOINTS.tablet
  )
  const isDesktop = computed(() => width.value >= BREAKPOINTS.tablet)

  return {
    width,
    isMobile,
    isTablet,
    isDesktop,
  }
}
