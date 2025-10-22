import { onMounted } from 'vue'

function easeInOutQuad(t: number, b: number, c: number, d: number) {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t + b
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}
export function useScrollToTop(duration = 0.8) {
  onMounted(() => {
    const start = window.scrollY
    const change = 0 - start
    const startTime = performance.now()
    const totalDuration = duration * 1000 // converte para ms

    function animateScroll(currentTime: number) {
      const elapsed = currentTime - startTime
      const position = easeInOutQuad(elapsed, start, change, totalDuration)
      window.scrollTo(0, position)
      if (elapsed < totalDuration) {
        requestAnimationFrame(animateScroll)
      } else {
        window.scrollTo(0, 0) // garante posição final exata
      }
    }

    requestAnimationFrame(animateScroll)
  })
}
