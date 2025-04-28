import { defineConfig } from 'vitepress'

export default {
  title: 'My Site', // 网站标题
  description: 'A VitePress site deployed on GitHub Pages', // 网站描述
  base: '/', // GitHub Pages 仓库名（稍后配置）
  themeConfig: {
    // 设置导航
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }  // 直接跳转到 /guide/
    ],

    // 设置侧边栏
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',  // 小标题
          collapsible: true,  // 可折叠
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Advanced', link: '/guide/advanced' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-username/my-vitepress-site' }
    ],
    search: {
      provider: 'local' // 启用本地搜索
    }
  }
}