function setInitialTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("bg-lightBg");
    document.documentElement.classList.add("bg-darkBg");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("bg-darkBg");
    document.documentElement.classList.add("bg-lightBg");
    localStorage.theme = "light";
  }
}

export { setInitialTheme };
