const express = require('express')
const server = express()
const postsRouter = require('./routes/posts')

server.use(express.json())
server.use('/api/posts', postsRouter)

server.get('/', (req, res) => {
  res.json({
    message: `Mr. Watson, come here--I want to see you.`
  })
})

module.exports = server
