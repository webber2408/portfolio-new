import { themes } from '../constants/theme.js';

const applyTheme = (themeName) => {
    const theme = themes[themeName];
    if(!theme) return;

    // Check if a <style> element already exists
    let styleElement = document.getElementById("dynamic-theme-style");

    // If not, create a new <style> element
    if (!styleElement) {
        styleElement = document.createElement("style");
        styleElement.id = "dynamic-theme-style"; // Set a unique ID to identify it
        document.head.appendChild(styleElement);
    }

    styleElement.innerHTML = `
        :root {
            --primary-color: ${theme};
        }
    `;

    localStorage.setItem("selectedTheme", themeName);
};

export default applyTheme;