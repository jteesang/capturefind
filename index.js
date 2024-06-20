import http from 'http'
import { headers, displayContent } from './util/helpers.js'
import { HTML } from './layout/main.js'
// import data from './notes/data.json' assert {type: 'json'}

const PORT = 8080;

async function getContent() {
  const response = await fetch('http://127.0.0.1:8000/logs')
  return await response.json() 
}
console.log(await getContent())

let logContent = displayContent(JSON.parse(JSON.stringify((await getContent()).data)))

let home = HTML(
  `<title>Capture n Find</title>
  <h1>Capture n Find</h1>`,
  `<main>
    <div>
      ${logContent}
    </div>
  </main>`,
  `<div>
    <p>Footer</p>
  </div>`
)

// start server
http.createServer(
  (request,response)=>{
    if (request.url == '/') {
      headers(home, response)
    }
    else {
      return response.end('Invalid request');
    }
  }
).listen(PORT);
