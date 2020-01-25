module.exports = {
  title: 'Breadstick',
  description: "A simple but flexible implementation of toast style notifications for Vue.js.",
  ga: "Analytics code",
  themeConfig: {
    nav: [
      {
        text: 'Guide',
        link: '/guide/getting-started.html'
      },
      {
        text: 'API',
        link: '/api/'
      },
      {
        text: 'Examples',
        link: '/examples/'
      },
      {
        text: 'Github',
        link: 'https://github.com/codebender828/breadstick'
      },
    ],
    repo: 'codebender828/breadstick',
    docsDir: 'docs',
    docsBranch: 'dev/docs',
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/getting-started',
        ]
      },
      {
        title: 'Examples',
        collapsable: false,
        children: [
          '/examples/'
        ]
      },
      {
        title: 'Advanced Usage',
        collapsable: false,
        children: [
          '/advanced/'
        ]
      },
      {
        title: 'API',
        collapsable: false,
        children: [
          '/api/'
        ]
      },
      {
        title: '❤️ Support',
        collapsable: false,
        children: [
          '/support/'
        ]
      }
    ],
    editLinks: true,
    editLinkText: 'Help us improve this page!'
  }
}
