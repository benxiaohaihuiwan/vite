const Koa = require("koa");

const fs = require("fs");

const app = new Koa();

app.use(async (ctx) => {
  // 解析出 request请求 response 响应
  //   const { request, response } = ctx;

  console.log("ctx:", ctx);
  // 判断 访问的url
  if (ctx.request.url === "/") {
    // 读取html文件
    const html = await fs.promises.readFile("index.html");
    // console.log("string:", html.toString());
    ctx.response.body = html;
    ctx.response.set("Content-Type", "text/html");
  }
  // 判断main.js 进行加载
  if (ctx.request.url === "/main.js") {
    console.log("进入到 main.js");
    const mainJs = fs.readFileSync("main.js");
    ctx.response.body = mainJs;
    // 通过js方式加载
    ctx.response.set("Content-Type", "text/javascript");
  }
  // 处理.vue 文件  通常这里会使用正则表达式去处理vue文件
  if (ctx.request.url === "/App.vue") {
    console.log("进入到 App.vue");
    const mainVue = fs.readFileSync("App.vue");
    // 如果是一个vue文件，会做一个字符串替换：mainVue.toString().find('<temolate>)
    // 如果匹配到了会全部替换成字符串
    // vue中会是转换成AST树，进行语法分析 使用vue.createElement() 构建原生的dom
    ctx.response.body = mainVue;
    // 通过js方式加载
    // 使用js方式去解析文件，在浏览器和服务器中，文件都是字符串
    ctx.response.set("Content-Type", "text/javascript");
  }
});

app.listen(5173, () => {
  console.log("running vite dev server is port 5178");
});
