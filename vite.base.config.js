import { defineConfig } from "vite";

export default defineConfig({
  envPrefix: "ENV_",
  css: {
    // css 配置
    modules: {
      // 覆盖默认的
      localsConvention: "camelCaseOnly", // 修改生成的配置对象的key的展现形式（驼峰还是中划线形式）
      //   generateScopedName: "[name]_[module]_[hash:5]", // 配置生成的文件名称
      // 也可以使用函数形式处理
      generateScopedName: (name, filename, css) => {
        /**
         * name: class 文件名称
         * filename：当前文件的路径
         * css：class里面定义的属性
         */
        console.log(name, filename, css);
        return `${name}_${Math.random().toString(36).substr(5, 10)}`;
      },
      scopeBehaviour: "local",
      hashPrefix: "hello", // 生成hash值的时候，会把自定义的这个hello也会包含进去
      globalModulePaths: ["./importA.module.css"], // 代表不想参与到css模块化路径中
    },
    preprocessorOptions: {
      less: {
        math: "always", // 会把less中的表达式都当作数学表达式处理如100px/2,(100px/2) 都会处理成50px
        globalVars: {
          // 设置全局变量。 在less中就直接可以使用@mainColor 来获取属性
          mainColor: "red",
        },
      },
    },
    devSourcemap: true, // 可以在调试代码的时候，找到css样式的原文件在哪
  },
});
