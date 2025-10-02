<script setup lang="ts">
import type { Link } from './@types/link'
import Header from './components/header/Header.vue'
import Container from './components/layout/Container.vue'

const links: Link[] = [
  { title: 'Home', url: '/' },
  { title: 'Sobre Mim', url: '/about' },
  { title: 'Projetos', url: '/projects' },
]
</script>

<template>
  <Container>
    <Header :links="links" />
  </Container>
</template>

<style scoped></style>
