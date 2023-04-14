function setInitialTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.add("bg-darkBg");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("bg-darkBg");
    localStorage.theme = "light";
  }
}

export { setInitialTheme };
