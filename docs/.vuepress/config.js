module.exports = {
  base: "/vuepress/",
  title: "你敲好看",
  description: "吴建波的博客",
  head: [["link", { rel: "icon", href: "image/favicon.ico" }]],
  port: 8889,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Haha", link: "/haha/" },
      { text: "Github", link: "http://github.wujianbo.com" }
    ]
  },
  extraWatchFiles: ['config.js']
};
