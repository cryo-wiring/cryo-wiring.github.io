import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://cryowire.github.io",
  integrations: [react()],
});