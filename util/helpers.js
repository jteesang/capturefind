export const headers = (data, response) => {
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': data.length,
      'Expires': new Date().toUTCString()
    })
    response.end(data)
}

export const displayContent = (data) => {
    return data.map(log =>`
        <p>${log.timestamp} | ${log.content}</p>
    `).join('')
}