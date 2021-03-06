import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

const description =
  "币圈生存指南,币圈生存指南，一份币圈人从入门到进阶的全方位指南。比特币 BTC、以太坊 ETH、泰达币 USDT";

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: "zh-CN",
  title: "币圈生存指南",
  description: "币圈生存指南",

  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/images/logo.png",
    sidebarDepth: 2,
    sidebar: [
      {
        text: "基础",
        children: [
          {
            text: "快速开始",
            link: "/",
          },
          {
            text: "严正声明",
            link: "/basic/严正声明.html",
          },
          {
            text: "联系投稿",
            link: "/basic/联系投稿.html",
          },
          {
            text: "比特币的价值",
            link: "/basic/比特币的价值.html",
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
            text: "期现套利：低风险套利年化 10~20%",
            link: "/trade/期现套利：低风险套利.html",
          },
          {
            text: "资金费率和市场情绪",
            link: "/trade/资金费率和市场情绪.html",
          },

          {
            text: "屯币不炒：长盈致富",
            link: "/trade/屯币不炒：长盈致富.html",
          },

          {
            text: "交易第一定律：买卖守恒",
            link: "/trade/交易第一定律：买卖守恒.html",
          },
        ],
      },

      {
        text: "市场判断",
        children: [
          {
            text: "BTC大趋势：现在到底处于什么位置",
            link: "/trade/BTC大趋势：现在到底处于什么位置.html",
          },
          {
            text: "BTC最多会跌多少？历年走势复盘",
            link: "/trade/BTC最多会跌多少？历年走势复盘.html",
          },
          {
            text: "矿机关机价：不可能跌破的价格",
            link: "/trade/矿机关机价：不可能跌破的价格.html",
          },
          {
            text: "Mcap/tvl 指数抄底成功",
            link: "/trade/Mcap_tvl 指数抄底成功.html",
          },
        ],
      },

      {
        text: "数据指标",
        children: [
          {
            text: "tvl/mcap",
            link: "https://www.defilink.top",
          },
          {
            text: "资金费率",
            link: "https://www.coinglass.com/zh/funding/BTC",
          },
          {
            text: "TVL",
            link: "https://defillama.com/chains",
          },
        ],
      },
    ],
    navbar: [
      { text: "首页", link: "/" },
      { text: "币圈指标", link: "https://www.defilink.top" },
      { text: "Github", link: "https://github.com/JeromeYangtao/CryptoGuide" },
    ],
  },
  head: [
    [
      "meta",
      {
        name: "keywords",
        content: description,
      },
    ],
    [
      "meta",
      {
        name: "description",
        content: description,
      },
    ],
    ["link", { rel: "icon", href: "/images/logo.png" }],
    // 360验证
    [
      "meta",
      {
        name: "360-site-verification",
        content: "69ab2b05253ab464f2494d53a2dd511c",
      },
    ],
    // 360 自动提交
    ["script", { src: "/js/360.js" }],
    // 百度验证
    ["meta", { name: "baidu-site-verification", content: "code-D3gL0A1DDB" }],
    // 谷歌验证
    [
      "meta",
      {
        name: "google-site-verification",
        content: "FVQR7btvyCeMgpfs0e-vIpxlqmFtU76V4ynenbF6NQo",
      },
    ],

    // 百度统计
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?bfb3deb14998b016c30cf647b4111fde";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
        `,
    ],
    // 添加百度站长的自动推送代码
    [
      "script",
      {
        src: "/js/baidu.js",
      },
    ],
  ],
  plugins: [
    [
      "vuepress-plugin-sitemap2",
      {
        hostname: "https://cryptoguide.cn",
      },
    ],
  ],
});
