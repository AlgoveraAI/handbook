// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Algovera Docs',
  tagline: 'Your guide to Algovera',
  url: 'https://docs.algovera.ai/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'AlgoveraAI', // Usually your GitHub org/user name.
  projectName: 'handbook', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/AlgoveraAI/handbook/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/AlgoveraAI/handbook/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Algovera',
        logo: {
          alt: 'Algovera',
          src: 'img/Icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Handbook/Introduction',
            position: 'left',
            label: 'Handbook',
          },
          {
            type: 'doc',
            docId: 'Tracks/Introduction',
            position: 'left',
            label: 'Tracks'
          },

          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/AlgoveraAI/handbook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Handbook',
                to: '/docs/Handbook/Introduction',
              },
              {
                label: 'Tracks',
                to: '/docs/Tracks/Coming Soon',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/e65RuHSDS5',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UC2A5iUpP6k52ZZmC8LFj1IA',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/algoveraai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/AlgoveraAI/handbook',
              },
              {
                label: 'Newsletter',
                href: 'http://eepurl.com/hSYfK5',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Algovera, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
