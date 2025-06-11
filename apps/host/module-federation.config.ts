import type { ModuleFederationPluginOptions } from "@rspack/core";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "host",
  filename: "remoteEntry.js",
  remotes: {
    // home: "home@http://localhost:3001/remoteEntry.js",
    // settings: "settings@http://localhost:3002/remoteEntry.js"
    
    home: "home@https://leandro-fonseca-1302-home-technicaltaskvalor-lean-7c663af09-ze.zephyrcloud.app/remoteEntry.js",
    settings: "settings@https://leandro-fonseca-1304-settings-technicaltaskvalor--9ebf49654-ze.zephyrcloud.app/remoteEntry.js"
  },
  exposes: {
    "./RemoteEntry": "./src/App.tsx"
  },
  shared: ["react", "react-dom", "react-router"]
};
