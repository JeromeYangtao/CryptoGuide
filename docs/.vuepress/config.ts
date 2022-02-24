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
            link: "/basic/btc.html",
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
          {
            text: "混个饭钱：startup 空投",
            link: "/trade/混个饭钱：startup 空投.html",
          },
          {
            text: "资金费率和市场情绪",
            link: "/trade/资金费率和市场情绪.html",
          },

          {
            text: "Mcap/tvl 指数抄底成功",
            link: "/trade/Mcap_tvl 指数抄底成功.html",
          },

          {
            text: "BTC最多会跌多少？历年走势复盘",
            link: "/trade/BTC最多会跌多少？历年走势复盘.html",
          },
          {
            text: "屯币不炒：长盈致富",
            link: "/trade/屯币不炒：长盈致富.html",
          },

          {
            text: "BTC大趋势：现在到底处于什么位置",
            link: "/trade/BTC大趋势：现在到底处于什么位置.html",
          },
          {
            text: "交易第一定律：买卖守恒",
            link: "/trade/交易第一定律：买卖守恒.html",
          },
        ],
      },
    ],
    navbar: [
      { text: "首页", link: "/" },
      { text: "Github", link: "https://github.com/JeromeYangtao/CryptoGuide" },
    ],
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
