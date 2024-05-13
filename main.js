import { count } from "./counter.js";

import _ from "lodash";

// import IndexCss from "./index.module.css";

// console.log("IndexCss:", IndexCss);

import importACss from "./importA.module.css";

console.log("importACss", importACss);

const div = document.createElement("div");

document.body.appendChild(div);

div.className = importACss["footerContent"];

import "./index.module.less";

// console.log("count", count);

console.log("import.meta.env:", import.meta.env);

console.log(1233);
