import { defineManifest } from "@crxjs/vite-plugin";
import packageJson from "../package.json";

export default defineManifest({
  name: "newtab",
  version: packageJson.version,
  description: "open current tab as new window",
  manifest_version: 3,
  background: {
    service_worker: "src/background.ts",
    type: "module",
  },
  commands: {
    handle_key_event: {
      suggested_key: {
        windows: "Ctrl+Shift+U",
        mac: "Command+Shift+U",
        chromeos: "Ctrl+Shift+U",
        linux: "Ctrl+Shift+U",
      },
      description: "Handle key event",
    },
  },
});
