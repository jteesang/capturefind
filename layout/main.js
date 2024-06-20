export const HTML = (header, body, footer) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width. initial-scale=1.0">
        ${header}
    </head>
    <body>
        ${body}
        ${footer}
    </body>
    </html>`;
}
