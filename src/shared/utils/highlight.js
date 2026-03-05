const escapeHTML = (unsafeString) => {
    return unsafeString
    .replaceAll(/&/g, '&amp;')
    .replaceAll(/</g, '&lt;')
    .replaceAll(/>/g, '&gt;')
    .replaceAll(/"/g, '&quot;')
    .replaceAll(/'/g, '&#39;')
}

const escaperegExp = (unsafeString) => {
    return unsafeString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

}

export const highlightCaseInsensitive = (text, query) => {
    const safeText = escapeHTML(text)
    const queryFormatted = query.trim()

    if (queryFormatted.length === 0) {
        return safeText
    }

    const pattern = new RegExp(escaperegExp(queryFormatted), 'ig')

    return safeText.replace(pattern, `<mark>$&</mark>`)
}