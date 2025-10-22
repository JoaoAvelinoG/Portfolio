<script setup lang="ts">
import Container from '../layout/Container.vue'
import Button from '../commons/button/Button.vue'
import Typer from './Typer.vue'

import { DownloadIcon } from 'lucide-vue-next'
import { computed } from 'vue'

const cvPath = '/Curriculo_Joao_Site.pdf'

const linkZap = computed(() => {
  return `https://wa.me/${import.meta.env.VITE_PUBLIC_ZAP}`
})
</script>

<template>
  <Container class="!px-8 h-[100vh] md:h-[calc(100vh-90px)]">
    <section class="flex items-center h-full !mt-12 md:!mt-10 !pb-12">
      <div class="flex flex-col items-start gap-4">
        <div class="hello-area inline-flex justify-center items-center gap-3 !mb-4">
          <div class="!py-0.3 !px-3 md:!px-4 rounded-sm bg-zinc-800">
            <h2 class="text-sm md:text-lg text-zinc-300">Olá eu sou o</h2>
          </div>
        </div>
        <div class="name-area flex flex-col justify-center items-start gap-2">
          <div>
            <h1 class="text-[#f1f1f1] text-5xl md:text-7xl font-semibold">
              João <br />
              Guilherme<span class="text-indigo-500">.</span>🖖🏼
            </h1>
          </div>
          <div class="border border-zinc-300 !px-4 rounded-sm">
            <Typer :texts="['Frontend Developer', 'Editor de Vídeo', 'React', 'VUE 3']" />
          </div>
        </div>
        <div class="cta-area flex gap-4 !mt-1 md:!mt-4">
          <a :href="linkZap" target="_blank" rel="noopener noreferrer">
            <Button>Fale Comigo</Button>
          </a>
          <a :href="cvPath" download>
            <Button class="flex items-center justify-center gap-4" variant="outline">
              <DownloadIcon class="text-amber-400" :size="18" />
              <span class="text-sm md:text-base">Baixe meu CV</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  </Container>
</template>
