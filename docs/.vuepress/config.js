module.exports = {
    title: 'LHH\'s blog',
    description: '龙火火的博客',
    keywords:"龙火火",
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
      ['meta',{'name':''}]
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '首页', link: '/' },
        {text: '前端', link: '/interface' },
        {text: '后端', link: '/date'},
        {text: '关于', link: '/about'} ,
        {text: 'Github', link: 'https://github.com/HCT0'}  ,    
      ],
      sidebar: 'auto', // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    }
  };