import "./style.css";
import typescriptLogo from "./typescript.svg";
import { Header, Counter, setupCounter } from "ui";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    ${Header({ title: "Web" })}
    <div class="card">
      ${Counter()}
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

console.log("hello from main.js");

const worker = new Worker("worker.js"); // <1>

worker.onmessage = (msg) => {
  // <2>
  console.log("message received from worker", msg.data);
};

worker.postMessage({ name: "Alice" }); // <3>

console.log("hello from end of main.js");
