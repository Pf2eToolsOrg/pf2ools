export function getValidColor(color) {
    const hexTest = /^(#|)([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/i;
    if (hexTest.test(color)) {
        return `#${color.replace("#", "")}`;
    } else {
        const colors = color.split(",").map(c => parseFloat(c.trim()));
        return `rgba(${colors})`
    }
}

export function stringToActionCopyPaste(text) {
    switch (text.toLowerCase()) {
        case '1':
        case 'a':
            return '[>]';
        case '2':
        case 'd':
            return '[>>]';
        case '3':
        case 't':
            return '[>>>]';
        case 'f':
            return '[F]';
        case 'r':
            return '[R]';
        default:
            return '[?]';
    }
}