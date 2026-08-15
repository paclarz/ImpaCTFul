<script lang="ts" setup>
import { navbarData } from '~/data'

useHead({
  title: 'ImpaCTFul',
  meta: [
    {
      name: 'description',
      content:'欢迎来到影响力CTF协会.',
    },
  ],
})

// Generate OG Image
defineOgImageComponent('About', {
  headline: '影响力CTF协会',
  title: navbarData.homeTitle,
  description: '学习密码学,逆向,二进制,嵌入式,web等多种技术与知识',
  link: '/logo.jpg',
})
</script>

<template>
  <main class="container max-w-5xl mx-auto text-zinc-600">
    <MainHero />
    <MainRecent />
    <MainTrending />
  </main>
</template>
