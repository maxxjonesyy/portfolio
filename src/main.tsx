import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

document.addEventListener('DOMContentLoaded', () => {
  const interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
      curX += (tgX - curX) / 30;
      curY += (tgY - curY) / 30;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
          move();
      });
  }

  window.addEventListener('mousemove', (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
  });

  move();
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App  />
    </BrowserRouter>
  </React.StrictMode>
);
