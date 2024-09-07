import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.xx-xmj.com',
  integrations: [icon(), sitemap(), react(), tailwind(), mdx(), partytown()]
});