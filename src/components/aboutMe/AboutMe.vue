<script setup lang="ts">
import Container from '../layout/Container.vue'
import LinkedinIcon from '../commons/icons/LinkedinIcon.vue'
import GithubIcon from '../commons/icons/GithubIcon.vue'
import InstagramIcon from '../commons/icons/InstagramIcon.vue'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <section :class="['!px-2 !mt-8 md:!mt-24 !mb-4 md:!px-0', props.class]">
    <Container>
      <div class="about-me__wrapper flex justify-center !px-2 md:!px-10">
        <div class="about-me__content flex justify-center items-center md:gap-30 w-full">
          <div
            class="profile-pi hidden lg:block max-w-[320px] max-h-[320px] md:max-w-[420px] md:max-h-[420px]"
          >
            <img class="rounded-md" src="../../assets//images/João.jpg" alt="" />
          </div>
          <div class="about-me__infos flex">
            <div class="!mt-4 !mb-4 md:!mt-8 md:!mb-8">
              <h1 class="text-2xl md:text-5xl text-center md:text-start font-bold text-[#f1f1f1]">
                Sobre Mim
              </h1>
              <h3 class="text-base md:text-lg text-center md:text-start !mt-2 text-[#F7B32B]">
                Apaixonado por Códigos! Por JS e TS🩵.
              </h3>
              <div class="!mt-6">
                <ul class="flex flex-col gap-8 md:gap-4 text-[#D7D6FF] text-center md:text-start">
                  <li class="text-sm md:text-base">
                    - Tecnólogo em Análise e Desenvolvimento de Sitemas.
                  </li>
                  <li class="text-sm md:text-base">
                    - Tecnólogo em Design Gráfico pela Cruzeiro do Sul.
                  </li>
                  <li class="text-sm md:text-base">
                    - Técnico em Informática pelo IF Sul de Minas.
                  </li>
                  <li class="text-sm md:text-base">- Estudante de Node nas horas vagas!</li>
                </ul>
                <div
                  class="social-media-links flex justify-center md:justify-start gap-4 !mt-8 md:!mt-12"
                >
                  <a
                    href="https://www.linkedin.com/in/jg-avelino/"
                    target="_blank"
                    class="cursor-pointer inline-flex justify-center items-center h-[46px] w-[46px] bg-[#f1f1f1] rounded-full"
                  >
                    <LinkedinIcon />
                  </a>
                  <a
                    href="https://github.com/JoaoAvelinoG"
                    target="_blank"
                    class="cursor-pointer inline-flex justify-center items-center h-[46px] w-[46px] bg-[#f1f1f1] rounded-full"
                  >
                    <GithubIcon />
                  </a>

                  <a
                    href="https://www.instagram.com/jaoag1/"
                    target="_blank"
                    class="cursor-pointer inline-flex justify-center items-center h-[46px] w-[46px] bg-[#f1f1f1] rounded-full"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
