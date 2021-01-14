const fs = require('fs');
const path = require('path');

function generateSidebarTree(dir) {
  const fullDir = path.resolve(__dirname, '../../docs/', dir.substr(1));
  let dirList = fs.readdirSync(fullDir);

  return  [
    dirList.includes('index.md') ? dir + '/' : null,
    ...dirList.map(f => {
      if (f === 'index.md') return null;

      const relativePath = dir + '/' + f;
      const stat = fs.statSync(path.resolve(fullDir, f));

      if (stat.isFile()) return relativePath;
      if (stat.isDirectory()) {
        const children = generateSidebarTree(relativePath);
        if (children.length === 0) return null;
        if (children.length === 1) return children[0];

        return {
          title: f,
          path: relativePath + '/',
          children
        };
      }

      return null; // Something funky
    })
  ].filter(v => v !== null);
}

module.exports = {
  title: '🦄 Unicorn',
  description: 'Cutting edge design system and web component library ✨ 🦄 ✨',
  dest: './dist',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
  ],
  themeConfig: {
    logo: './img/lockup.png',
    lastUpdated: true,
    repo: 'unicefnz/unicorn',
    docsDir: 'packages/docs/docs',
    editLinks: true,
    nav: [
      { text: 'Storybook', link: '/storybook/' },
      { text: 'Get Started', link: '/setup/' }
    ],
    sidebar: [
      {
        title: 'Guides',
        path: '/',
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
      },
      {
        title: 'API Documentation',
        path: '/api/',
        children: generateSidebarTree('/api')
      }
    ]
  },
  plugins: ['vuepress-plugin-mermaidjs']
};
