const http = require('http')
const crypto = require('crypto')
const port = 80

const requestHandler = (request, response) => {
  const hash = crypto.randomBytes(8).toString('hex')

  console.log(`${hash} - ${request.method} ${request.url} - ${JSON.stringify(request.headers)} `)
  request.on('data', function(chunk) {
    console.log(`data: ${chunk}`)
  })
  response.end(`200 OK - ${hash}\n`)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
