// Function to decode HTML entities in a given text
export function decodeHTMLEntities(text) {
    return text.replace(/&[^;]+;/g, '');
}

