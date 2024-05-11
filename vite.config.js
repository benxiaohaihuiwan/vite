import { defineConfig } from "vite";

import baseConfig from "./vite.base.config";
import devConfig from "./vite.dev.config";
import prodConfig from "./vite.prod.config";

const envConfig = {
  // 生产环境配置
  build: () => {
    console.log("生产环境");
    return { ...baseConfig, ...prodConfig };
  },
  // 开发环境配置
  serve: () => {
    console.log("开发环境");
    return { ...baseConfig, ...devConfig };
  },
};

export default defineConfig(({ command }) => {
  console.log("command", command);
  return envConfig[command]();
});
