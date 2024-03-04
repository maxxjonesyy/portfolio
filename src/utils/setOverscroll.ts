import isDarkTheme from "./isDarkTheme";

function setOverScroll() {
    const isDark = isDarkTheme();
    const html = document.querySelector("html");

    if(html) {
        isDark ? html.style.backgroundColor = '#00171F' : html.style.backgroundColor = '#FBFBFF';
    }    
}

export default setOverScroll;