import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "airbauer.ch",
  description: "Personal Website build with Vitepress",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    footer: {
      message:
        'Released under the <a href="https://github.com/real-airbauer/airbauer/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2023 <a href="https://github.com/real-airbauer">AIRbauer</a>',
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/real-airbauer/airbauer" },
    ],
  },
});
