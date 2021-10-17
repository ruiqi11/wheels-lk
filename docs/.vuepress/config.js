module.exports = {
  base: "/wheels-lk/",
  title: "wheels-lk",
  description: "一个易用的 UI 框架",
  markdown: {
    anchor: { permalink: false },
  },
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "欢迎 Star", link: "https://github.com/ruiqi11/wheels-lk/" },
      { text: "Github", link: "https://github.com/ruiqi11/" }
    ],
    sidebar: [{
        title: "介绍",
        collapsable: false,
        children: ["/introduce/"]
      },
      {
        title: "入门",
        collapsable: false,
        children: ["/install/", "/get-started/"]
      },
      {
        title: "组件",
        collapsable: false,
        children: [
          "/components/button",
          "/components/input",
          "/components/tabs",
          "/components/grid",
          "/components/layout",
          "/components/popover",
          "/components/collapse",
          "/components/toast",
          "/components/list",
        ]
      }
    ],
  }
};