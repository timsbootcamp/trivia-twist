
export function decodeHTMLEntities(text) {
    return text.replace(/&[^;]+;/g, '');
}

