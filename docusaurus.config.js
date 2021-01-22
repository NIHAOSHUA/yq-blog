module.exports = {
  title: '扬俏的Blog',
  tagline: '记录美好生活',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/index.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '扬俏的Blog',
      logo: {
        alt: 'My Site Logo',
        src: 'img/gangqin_1.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: '面试',
          position: 'right',
        },
        {to: 'blog', label: '博客', position: 'right'},
        {
          href: 'https://github.com/NIHAOSHUA',
          label: 'GitHub',
          position: 'right',
        },
        // {
        //   href: 'https://space.bilibili.com/406252901',
        //   label: 'Bilibili',
        //   position: 'right',
        // },
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/NIHAOSHUA',
            },
            // {
            //   label: 'Bilibili',
            //   href: 'https://space.bilibili.com/406252901',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 扬俏's project, Inc. Built with Docusaurus.`,
    },
    algolia: {
      appId: 'app-id',
      apiKey: 'api-key',
      indexName: 'index-name',
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
