const { Router } = require('express')
const router = new Router()
const apiController = require('../controller/apiController.js')

router.get('/apis', apiController.getapis)
router.get('/posts', apiController.getPosts)
router.get('/posts/:id', apiController.getCommentsByPost)

module.exports = router ;