// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to formsflow.ai',
  tagline: 'formsflow.ai',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: ' https://aot-technologies.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/forms-flow-ai-doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AOT-Technologies', // Usually your GitHub org/user name.
  projectName: 'forms-flow-ai-doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/formsflow-social-card.png',
      navbar: {
        title: 'formsflow.ai',
        logo: {
          alt: 'formsflow.ai Logo',
          src: 'img/formsflow-logo.svg',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
          },

          {
            href: 'https://github.com/AOT-Technologies/forms-flow-ai',
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
                label: 'Tutorial',
            to: 'https://github.com/AOT-Technologies/forms-flow-ai-doc',
              },
            ],
          },
          {
            title: 'Website',
            items: [
              {
                label: 'Website',
                href: 'https://www.aot-technologies.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/AOT-Technologies/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AOT Technologies`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
