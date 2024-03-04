export default function isDarkTheme() {
    const theme = localStorage.theme;

    if(!theme || theme === 'dark') {
        return true;
    } else return false;
}