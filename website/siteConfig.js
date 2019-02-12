// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const users = [
  { caption: 'Frank Tasillo, Co-Chair (IHS Markit)', pinned: true },
  { caption: 'Amber Baldet, Co-Chair (Clovyr)', pinned: true },
  { caption: 'Patrick Nielsen, Participant (Clovyr)'  }
];

const siteConfig = {
  title: 'FINOS Decentralized Ecosystem Growth', // Title for your website.
  tagline: 'Created to aggregate, develop, and integrate tools that facilitate coordination of decentralized applications across financial firms and existing ecosystems.',
  url: 'https://decentralized.finos.org', // This will change to https://decentralized.finos.org
  cname: 'decentralized.finos.org',
  baseUrl: '/',
  projectName: 'finos-deg',
  organizationName: 'finos-deg',
  headerLinks: [
    {doc: 'fo-intro', label: 'Intro'},    
    {doc: 'fo-library', label: 'Object Library'},
    {page: 'getinvolved', label: 'Get Involved'}
  ],
  headerIcon: 'img/finos-white.png',
  footerIcon: 'img/finos.png',
  favicon: 'img/favicon/favicon.ico',
  colors: {
    primaryColor: '#00b5e2',
    secondaryColor: '#205C3B',
  },

  // If you have users set above, you add it here:
  users,

  copyright: `Copyright © ${new Date().getFullYear()} FINOS - The Fintech Opensource Foundation`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  wrapPagesHTML: true,
  docsSideNavCollapsible: true,

  twitterUsername: 'finos',
  // Open Graph and Twitter card images.
  ogImage: 'img/fo-logo-white.gif',
  twitterImage: 'img/fo-logo-white.gif',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/finos-deg/finos-deg'
};

module.exports = siteConfig;
