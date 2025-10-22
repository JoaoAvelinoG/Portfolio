<script setup lang="ts">
import WorkedIn from './WorkedIn.vue'
import Container from '../layout/Container.vue'

import PenseInfinitoLogo from '../../assets/images/Pense-infinito-logo.jpg'
import PocoFundoLogo from '../../assets/images/Brasao.png'
import CoopfamLogo from '../../assets/images/Logomarca-Verde-Coopfam-300x68-1.png'
import ImediaLogo from '../../assets/images/Logo_Imedia.png'
</script>

<template>
  <Container>
    <div class="flex flex-col items-center gap-12 space-y-6 !mt-20 md:!mt-26 !mb-26">
      <h2 class="text-xl md:text-3xl text-center font-bold text-zinc-600">
        Experiências profissionais:
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 !px-12 !md:px-12">
        <WorkedIn
          :startIn="2023"
          :ended="2025"
          enterpriseName="Designer Gráfico - Coopfam"
          :enterpriseImg="CoopfamLogo"
          enterpriseDescription="Criação e desenvolvimento de peças gráficas institucionais e promocionais, incluindo rótulos de embalagens, banners responsivos para web, posts e carrosséis para redes sociais (Instagram e Facebook), gestão de redes sociais. Produção de vídeos publicitários com foco em campanhas internas e externas."
        />

        <WorkedIn
          class="px-12 bg-black"
          :startIn="2023"
          :ended="2023"
          enterpriseName="ADM - Página Pense Infinito"
          :enterpriseImg="PenseInfinitoLogo"
          enterpriseDescription="Um dos Adm's e editor da página Pense Infinito página com cerca de 100 mil seguidores, por um período curto, cerca de 3 meses, ajudei a elaborar roteiros e criar vídeos animados com After Effects."
        />

        <WorkedIn
          class="px-12 bg-black"
          :startIn="2022"
          :ended="2022"
          enterpriseName="Designer Gráfico - Imedia Comunicação"
          :enterpriseImg="ImediaLogo"
          enterpriseDescription="Criação de logotipos, atualização de imagens para instagram, gestão de instagram, utilização de Adobe XD para criação de UX/UI e interfaces agradáveis para os usuários finais."
        />

        <WorkedIn
          class="px-12 bg-black"
          :startIn="2020"
          :ended="2021"
          enterpriseName="Estagiário - Prefeitura de Poço Fundo MG"
          :enterpriseImg="PocoFundoLogo"
          enterpriseDescription="Tarefas administrativas variadas, como atendimento interno, arquivamento, digitalização e atualização de documentos."
        />

        <WorkedIn
          class="p-20 bg-black"
          :startIn="2016"
          :ended="2017"
          enterpriseName="Estagiário - PC&CIA"
          enterpriseDescription="Manutenção preventiva e corretiva de computadores, limpeza de hardware, formatação de sistemas, remoção de malwares e suporte técnico domiciliar."
        />
      </div>
    </div>
  </Container>
</template>
