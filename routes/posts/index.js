const postsRouter = require('express').Router()
const db = require('../../data/db')

postsRouter.get('/', async (req, res) => {
  try {
    const posts = await db.find()
    res.status(200).json({
      success: true,
      posts
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `The posts information could not be retrieved`
    })
  }
})

module.exports = postsRouter
