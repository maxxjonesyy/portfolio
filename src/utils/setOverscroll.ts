import { isDarkTheme } from "./index";

function setOverScroll() {
  const isDark = isDarkTheme();
  const html = document.querySelector("html");

  if (html) {
    isDark
      ? (html.style.backgroundColor = "#000000")
      : (html.style.backgroundColor = "#FBFBFF");
  }
}

export default setOverScroll;
