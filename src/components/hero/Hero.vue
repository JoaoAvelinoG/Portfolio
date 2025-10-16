<script setup lang="ts">
import Container from '../layout/Container.vue'
import Button from '../commons/button/Button.vue'
import Typer from './Typer.vue'

import { DownloadIcon } from 'lucide-vue-next'
</script>

<template>
  <Container class="!px-8 h-[calc(100vh-220px)] md:h-[calc(100vh-80px)]">
    <section class="flex h-full !mt-30 md:!mt-60">
      <div class="flex flex-col items-start gap-4">
        <div class="hello-area inline-flex justify-center items-center gap-3 !mb-4">
          <div class="!py-0.3 !px-3 md:!px-4 rounded-sm bg-zinc-800">
            <h2 class="text-sm md:text-lg text-zinc-300">Olá eu sou o</h2>
          </div>
        </div>
        <div class="name-area flex flex-col justify-center items-start gap-3">
          <div>
            <h1 class="text-6xl md:text-7xl font-semibold">
              João Guilherme<span class="text-indigo-500">.</span>🖖🏼
            </h1>
          </div>
          <div class="border border-zinc-300 !px-4 rounded-sm">
            <Typer :texts="['Frontend Developer', 'Editor de Vídeo', 'React', 'VUE 3']" />
          </div>
        </div>
        <div class="cta-area flex gap-4 !mt-4">
          <Button>Fale Comigo</Button>
          <Button class="flex items-center justify-center gap-4" variant="outline">
            <DownloadIcon :size="18" />
            <span class="text-base">Baixe meu CV</span>
          </Button>
        </div>
      </div>
    </section>
  </Container>
</template>
