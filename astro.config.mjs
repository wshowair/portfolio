import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://dev-bits.ca',

  // Uncomment the next if deploying to Github pages with no custom domain
  // site: 'https://wshowair.github.io',
  // base: '/portfolio',
  integrations: [mdx(), sitemap()],
})
