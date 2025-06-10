// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../settings/src/**/*.{js,ts,jsx,tsx}",
    "../host/src/**/*.{js,ts,jsx,tsx}"
  ],
  presets: [sharedConfig],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      }
    }
  }
};

export default config;
