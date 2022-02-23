import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: "zh-CN",
  title: "币圈生存指南",
  description: "币圈生存指南",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
    sidebarDepth: 2,
    sidebar: [
      {
        text: "基础",
        children: [
          {
            text: "快速开始",
            link: "/btc",
          },
        ],
      },
      {
        text: "交易策略",
        children: [
          {
            text: "策略回测：快速验证自己的交易策略",
            link: "/trade/策略回测：快速验证自己的交易策略.html",
          },
        ],
      },
    ],
    navbar: [{ text: "首页", link: "/" }],
  },
  head: [
    // 添加百度统计
    [
      "script",
      {},
      `
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?bfb3deb14998b016c30cf647b4111fde";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
        `,
    ],

    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
});
