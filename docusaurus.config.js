'use strict';

const siteConfig = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          editUrl: 'https://github.com/unloadphp/unload-documentation',
          sidebarPath: require.resolve('./sidebars.json'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        // gtag: {
          // trackingID: '1',
        // },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
  title: 'UNLOAD',
  tagline: '🚀 The simplest way to build and deploy a serverless PHP application with AWS Cloud',
  organizationName: 'unload',
  projectName: 'unload.sh',
  url: 'https://unload.sh',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  themeConfig: {
    announcementBar: {
      id: 'support_ukraine',
      content:
        '#StandWithUkraine 🇺🇦 <a target="_blank" rel="noopener noreferrer" href="https://github.com/vshymanskyy/StandWithUkraine/blob/main/docs/README.md"> Help Ukraine Now</a>.',
      backgroundColor: '#0057b7',
      textColor: '#fff',
      isCloseable: false,
    },
    navbar: {
      title: 'UNLOAD',
      logo: {
        alt: 'Unload Logo',
        src: 'img/unload.svg',
      },
      items: [
        {label: 'Documentation', to: 'docs/install'},
        {label: 'Support', to: 'help'},
        {
          label: 'GitHub',
          href: 'https://github.com/unloadphp/unload',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      logo: {
        alt: 'Unload Logo',
        src: 'img/unload_white.png',
        href: 'https://unload.sh/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} unload.sh.`,
    },
    image: 'img/unload.svg',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
};

module.exports = siteConfig;
