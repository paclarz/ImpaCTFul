export const navbarData = {
  homeTitle: 'ImpaCTFul',
}

export const footerData = {
  author: '影响力CTF协会',
  aboutAuthor: '学习密码学,逆向,二进制,嵌入式,web等多种技术与知识',
  authorInterest: '本网站仅供个人学习整理交流使用，与任何机构公司实体无关。',
  aboutTheSite: '本网站基于 Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon.',
}

export const homePage = {
  title: '影响力CTF协会',
  description: '学习密码学,逆向,二进制,嵌入式,web等多种技术与知识',
}

export const blogsPage = {
  title: '全部文章',
  description: '这里汇总所有知识博客与公开信息.',
}

export const categoryPage = {
  title: '分类',
  description: '根据标签分类查找博客',
}

export const aboutPage = {
  title: '关于我们',
  description:
    '我们的名字来源于单词 Impactful, 该单词内含“CTF”, 是本协会的核心研究内容“夺旗赛 ( Capture The Flag )”的缩写, 单词的中文直译为“影响力”。是一个以兴趣和热爱驱动的CTF社团',
  aboutMe: '本网站还在早期开发中，任何问题请与开发者联系！',
}

export const seoData = {
  title: `ImapCTFul | 影响力CTF协会`,
  ogTitle: `ImpaCTFul 影响力CTF协会`,
  description: `TODO-seoData-description`,
  twitterDescription: `TODO-seoData-twitterDescription`,
  image: 'TODO-seoData-image',
  mySite: 'https://impactful-30.online',
  twitterHandle: 'TODO-seoData-twitterHandle',
  mailAddress: '1203308433@qq.com',
}

export const socialLinks = {
  githubLink: 'https://github.com/paclarz',
  linkedinLink: 'TODO-socialLinks',
  twitterLink: 'TODO-socialLinks',
  stackoverflowLink: 'TODO-socialLinks',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
