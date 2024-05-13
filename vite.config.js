import { defineConfig, loadEnv } from "vite";

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

export default defineConfig(({ command, mode }) => {
  console.log("command", command);
  // 获取 env
  /**
   * mode：执行命令是npm run dev --mode development，代表dev环境
   * process.cwd(): 获取当前的目录
   * 第三个参数：指定读取那个env文件,默认为.env
   */
  // vite.config.js 会先读取.env文件，解析配置并把内容放到一个对象里
  /**
   * 若是执行的是dev环境，则会在把.env.development配置里的内容解析出来，放到对象中
   * 若是执行的是build环境，则会在把.env.production配置里的内容解析出来，放到对象中
   * 此对象里的内容会覆盖掉.env里获取到的对象内容
   */
  const env = loadEnv(mode, process.cwd(), "");
  //   console.log("env:", env);
  return envConfig[command]();
});
