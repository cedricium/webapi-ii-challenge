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

postsRouter.post('/', async (req, res) => {
  const { title, contents } = req.body
  if (!title || !contents ) {
    return res.status(400).json({
      success: false,
      error: `Please provide title and contents for the post`
    })
  }
  try {
    const { id } = await db.insert({ title, contents })
    const post = await db.findById(id)
    res.status(201).json({
      success: true,
      post
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `An error occurred while saving the post to the database`
    })
  }
})

module.exports = postsRouter
