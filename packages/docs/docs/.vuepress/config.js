module.exports = {
  title: '🦄 Unicorn',
  description: 'Documentation for the Unicorn design system',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Storybook', link: '/storybook' },
      { text: 'Get Started', link: '/setup/' }
    ],
    sidebar: [
      '/',
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
};
