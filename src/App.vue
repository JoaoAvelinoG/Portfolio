<script setup lang="ts">
import type { Link } from './@types/link'
import Header from './components/header/Header.vue'

import Hero from './components/hero/Hero.vue'
import AboutMe from './components/aboutMe/AboutMe.vue'
import WhatsAppLink from './components/commons/wpp/WhatsAppLink.vue'
import WorkExperiences from './components/experiences/WorkExperiences.vue'

const links: Link[] = [
  { title: 'Home', url: '/' },
  { title: 'Sobre mim', url: '/about' },
  { title: 'Projetos', url: '/projects' },
  { title: 'Experiências', url: '/experiences' },
  { title: 'Skills', url: '/skills' },
]
</script>

<template>
  <WhatsAppLink />
  <Header class="shadow-[0px_4px_6px_-1px_rgba(0,_0,_0,_0.1)]" :links="links" />
  <Hero />
  <AboutMe class="bg-indigo-500 !p-12" />
  <WorkExperiences />
</template>

<style scoped></style>
