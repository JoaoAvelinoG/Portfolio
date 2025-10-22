<script setup lang="ts">
import { ref } from 'vue'

// Components
import Header from './components/header/Header.vue'
import Hero from './components/hero/Hero.vue'
import AboutMe from './components/aboutMe/AboutMe.vue'
import WorkExperiences from './components/experiences/WorkExperiences.vue'
import MySkills from './components/mySkills/MySkills.vue'
import Footer from './components/footer/Footer.vue'
import WhatsAppLink from './components/commons/wpp/WhatsAppLink.vue'

// Types
import type { Link } from './@types/link'

// Composables
import { useScrollToSection } from './composables/useScrollToSection'
import { useScrollToTop } from './composables/useScrollToTop'

// Refs das seções
const homeRef = ref<HTMLElement | null>(null)
const aboutRef = ref<HTMLElement | null>(null)
const experiencesRef = ref<HTMLElement | null>(null)
const skillsRef = ref<HTMLElement | null>(null)

// Lista de links do header
const links: Link[] = [
  { title: 'Home', refName: 'homeRef' },
  { title: 'Sobre mim', refName: 'aboutRef' },
  { title: 'Experiências', refName: 'experiencesRef' },
  { title: 'Skills', refName: 'skillsRef' },
]

const sections = { homeRef, aboutRef, experiencesRef, skillsRef }
const { scrollToSection } = useScrollToSection(sections)

function handleScrollTo(refName: string) {
  scrollToSection(refName)
}

// ⚡ Scroll suave para o topo ao montar o componente
useScrollToTop()
</script>

<template>
  <WhatsAppLink />

  <!-- Header com links -->
  <Header
    class="shadow-[0px_4px_6px_-1px_rgba(0,_0,_0,_0.1)]"
    :links="links"
    @scroll-to="handleScrollTo"
  />

  <main class="h-screen">
    <section ref="homeRef">
      <video class="absolute top-0 left-0 w-full h-full object-cover" autoplay muted loop>
        <source src="/videos/BG-VIDEO.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>
      <div class="relative z-10 flex items-center justify-center w-full h-full">
        <Hero />
      </div>
    </section>

    <section ref="aboutRef" class="bg-indigo-500 !p-12">
      <AboutMe />
    </section>

    <section ref="experiencesRef">
      <WorkExperiences />
    </section>

    <section ref="skillsRef">
      <MySkills />
    </section>

    <Footer />
  </main>
</template>
