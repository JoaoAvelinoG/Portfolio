import { type Ref } from 'vue'

function easeInOutQuad(t: number, b: number, c: number, d: number) {
  t /= d / 2
  if (t < 1) return (c / 2) * t * t + b
  t--
  return (-c / 2) * (t * (t - 2) - 1) + b
}

export function useScrollToSection(sections: Record<string, Ref<HTMLElement | null>>) {
  function scrollToSection(refName: string, duration = 0.8) {
    const section = sections[refName]?.value
    if (!section) return

    const start = window.scrollY
    const end = section.offsetTop
    const change = end - start
    const startTime = performance.now()
    const totalDuration = duration * 1000

    function animateScroll(currentTime: number) {
      const elapsed = currentTime - startTime
      const position = easeInOutQuad(elapsed, start, change, totalDuration)
      window.scrollTo(0, position)
      if (elapsed < totalDuration) {
        requestAnimationFrame(animateScroll)
      } else {
        window.scrollTo(0, end) // garante posição final exata
      }
    }

    requestAnimationFrame(animateScroll)
  }

  return { scrollToSection }
}
