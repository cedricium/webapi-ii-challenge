const express = require('express')
const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  res.json({
    message: `Mr. Watson, come here--I want to see you.`
  })
})

module.exports = server
