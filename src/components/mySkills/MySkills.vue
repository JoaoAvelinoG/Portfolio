<script setup lang="ts">
import { Code, PenTool, Video, VideoIcon } from 'lucide-vue-next'
import SkillCard from './SkillCard.vue'

import Container from '../layout/Container.vue'
import ReactLogo from '../../assets/svg/ReactLogo.vue'
import VueLogo from '../../assets/svg/VueLogo.vue'
import TypeScript from '../../assets/svg/TypeScript.vue'
import NextLogo from '../../assets/svg/NextLogo.vue'
import NuxtLogo from '../../assets/svg/NuxtLogo.vue'
import TailwindLogo from '../../assets/svg/TailwindLogo.vue'
import PostgresLogo from '../../assets/svg/PostgresLogo.vue'
import PrismaLogo from '../../assets/svg/PrismaLogo.vue'

import NodeLogo from '../../assets/svg/NodeLogo.vue'
import Bootstrap from '../../assets/svg/Bootstrap.vue'
import Figma from '../../assets/svg/Figma.vue'
import PHP from '../../assets/svg/PHP.vue'
</script>
<template>
  <Container>
    <h1 class="text-center font-medium text-xl md:text-2xl !mb-22">Minhas Habilidades:</h1>
    <div
      class="grid place-items-center grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-12 !px-8"
    >
      <SkillCard skillTitle="React" :icon="ReactLogo" />
      <SkillCard skillTitle="Vue 3" :icon="VueLogo" />
      <SkillCard skillTitle="TypeScript" :icon="TypeScript" />
      <SkillCard skillTitle="Next" :icon="NextLogo" />
      <SkillCard skillTitle="Nuxt" :icon="NuxtLogo" />
      <SkillCard skillTitle="Tailwind CSS" :icon="TailwindLogo" />
      <SkillCard skillTitle="Postgresql (Básico)" :icon="PostgresLogo" />
      <SkillCard skillTitle="Prisma ORM (Básico)" :icon="PrismaLogo" />
      <SkillCard skillTitle="Node (Básico)" :icon="NodeLogo" />
      <SkillCard skillTitle="Bootstrap" :icon="Bootstrap" />

      <div class="col-span-full flex justify-center gap-64 md:gap-36">
        <SkillCard skillTitle="Figma" :icon="Figma" />
        <SkillCard skillTitle="PHP (Básico)" :icon="PHP" />
      </div>
    </div>
  </Container>
</template>
