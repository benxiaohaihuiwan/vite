// postcss-preset-env postcss预设插件，包含了语法降级，编译等插件
const postcssPresetEnv = require("postcss-preset-env");
// postcss 主要就是把css一些高级语法或者新语法，进行降级，兼容低版本浏览器
module.exports = {
  plugins: [postcssPresetEnv()],
};
