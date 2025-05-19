import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import partytown from '@astrojs/partytown'

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  image:{
    domains: ['app.slmsolar.com'],
  },
  site: 'https://slmsolar.com',
  integrations: [
    tailwind(),
    sitemap(),
    react(),
    robotsTxt(
      {
      policy: [
        {
          userAgent: "* ",
          allow: '/',
          disallow: ['/~partytown'],
          sitemap: "https://slmsolar.com/sitemap-index.xml"
        },
   
      
      ],
    }
    ),
    playformCompress(),
    partytown({
      config: {
        // forward: ["dataLayer.push"],
      },
    }),
  ],
});