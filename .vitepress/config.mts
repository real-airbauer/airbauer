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
      { text: "vorschau", link: "/example-customer-page"},
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
          { text: "vorschau", link: "/example-customer-page"},
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
      { icon: "mastodon", link: "https://mastodon.social/@airbauer"},
      { icon: "discord", link: "https://discord.com/users/549207539544227846"},

    ],
  },
});
