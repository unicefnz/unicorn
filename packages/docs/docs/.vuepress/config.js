module.exports = {
  title: '🦄 Unicorn',
  description: 'Cutting edge design system and web component library ✨ 🦄 ✨',
  dest: './dist',
  themeConfig: {
    logo: './img/lockup.png',
    lastUpdated: true,
    repo: 'unicefnz/unicorn',
    docsDir: 'packages/docs/docs',
    editLinks: true,
    nav: [
      { text: 'Storybook', link: '/storybook' },
      { text: 'Get Started', link: '/setup/' }
    ],
    sidebar: [
      {
        title: 'Docs',
        path: '/',
        collapsable: false,
        children: [
          {
            title: 'Getting Started',
            path: '/setup/',
            children: [
              '/setup/html',
              '/setup/react',
              '/setup/next'
            ]
          },
          '/theming',
          '/typography',
          '/contributing'
        ]
      }
    ]
  }
};
