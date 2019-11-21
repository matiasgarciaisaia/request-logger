const http = require('http')
const port = 80

const requestHandler = (request, response) => {
  console.log(`${request.method} ${request.url}`)
  console.log(request.headers)
  request.on('data', function(chunk) {
    console.log(`data: ${chunk}`)
  })
  response.end('200 OK')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
