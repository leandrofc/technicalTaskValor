import type { ModuleFederationPluginOptions } from "@rspack/core";

export const mfConfig: ModuleFederationPluginOptions = {
  name: "settings",
  filename: "remoteEntry.js",
  exposes: {
    "./RemoteEntry": "./src/RemoteEntry.tsx"
  },
  remotes: {
    // host: "host@http://localhost:3000/remoteEntry.js"
    
    host: "host@https://leandro-fonseca-1303-host-technicaltaskvalor-lean-b4ff7e770-ze.zephyrcloud.app/remoteEntry.js"
  },
  shared: ["react", "react-dom", "react-router"]
};
