module.exports = {
  title: 'Breadstick', // Title of the website
  // appears in the meta tag and as a subtitle
  description: "A simple but flexible implementation of toast style notifications for Vue.js.",
  // Google Analytics tracking code
  ga: "Analytics code",
  themeConfig: {
      nav: [
          // links that will appear in the top navbar
          { text: 'Guide', link: '/guide/getting-started.html' },
          { text: 'Examples', link: '/examples/' },
          // external link
          { text: 'Github', link: 'https://github.com/codebender828/breadstick' },
      ],
      sidebar: [
          // These links will appear in the sidebar
          // Create heading groups
          {
              title: 'Guide',
              collapsable: false,
              children: [
                  // These are pages we'll add later
                  '/guide/getting-started',
              ]
          },
          {
            title: 'Examples',
            collapsable: false,
            children: [
              '/examples/'
            ]
          }
      ]
  }
}