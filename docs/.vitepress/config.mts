import { defineConfig } from 'vitepress'

export default {
  title: 'My Site', // 网站标题
  description: 'A VitePress site deployed on GitHub Pages', // 网站描述
  base: '/K3yhope/', // GitHub Pages 仓库名（稍后配置）
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/my-vitepress-site' }
    ],
    search: {
      provider: 'local' // 启用本地搜索
    }
  }
}