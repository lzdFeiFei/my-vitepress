module.exports = {
  title: "feifei 的小窝",
  description: "Just playing around.",

  themeConfig: {
    logo: "/logo.jpg",
    nav: [
      { text: "Getting Started", link: "/getting-started" },
      { text: "Bookmarks", link: "/bookmarks" },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [{ text: "Getting Started", link: "/getting-started" }],
      },
    ],
  },

  head: [
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
    // ["script", { src: "/test.js", type: "module" }],
  ],
};
