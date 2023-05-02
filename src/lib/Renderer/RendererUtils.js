export const Utils = {}

Utils.getValidColor = function getValidColor(color) {
    const hexTest = /^(#|)([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/i;
    if (hexTest.test(color)) {
        return `#${color.replace("#", "")}`;
    } else {
        const colors = color.split(",").map(c => parseFloat(c.trim()));
        return `rgba(${colors})`
    }
}