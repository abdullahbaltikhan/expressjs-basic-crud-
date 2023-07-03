var express = require('express');
var router = express.Router();

const auth = require('../middleware/auth');
const blogController = require('../controllers/blogController')

// routes
router.get('/', blogController.indexBlog);
router.get('/create', blogController.createBlog);
router.post('/create', blogController.storeBlog);
router.get('/edit/:id', blogController.editBlog);
router.post('/update/:id', blogController.updateBlog);
router.post('/delete/:id', blogController.deleteBlog);

module.exports = router;
