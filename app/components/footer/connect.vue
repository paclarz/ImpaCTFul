<script setup lang="ts">
import { footerData, seoData } from '~/data'

import { useClipboard } from '@vueuse/core'

const { copy, copied, isSupported } = useClipboard()
const emailAddress = seoData.mailAddress

const copyEmail = () => {
  copy(emailAddress)
  // copied.value 会自动变为 true，2秒后恢复 false
}
</script>

<template>
  <div>
    <p class="text-black dark:text-zinc-300 text-base font-semibold">联系作者</p>
    <p class="dark:text-zinc-300">
      {{ footerData.authorInterest }}
    </p>
    <div class="flex group-hover:underline text-sky-700 dark:text-sky-400 items-center pt-2 cursor-pointer" 
      @click="copyEmail">
      <p>{{ copied ? '已复制！' : '复制电子邮件地址' }}</p>
      <!-- TODO： 增加QQ，邮件，github等方式 -->
      <LogoArrow v-if="!copied" />
    </div>
  </div>
</template>
