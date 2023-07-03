const blogModel = require('../models/blogModel')


class blogController {

    
static indexBlog =  async(req, res) => {
    try {
        const getblog = await blogModel.find()

        res.render('index', {title: 'Index Blog Page', getblog});
    } catch (error) {
        res.status(500).send(error.message)
    }
}

static createBlog =  async(req, res) => {
    try {
        // const appss = await Apps.find()
        res.render('create',{title: 'Write New Blog Post'});
    } catch (error) {
        res.status(500).send(error.message)
    }
}

static storeBlog =  async(req, res) => {
    try {
        const {title, body} = req.body
        // console.log(req.body);
        const inblog = new blogModel({
            title:title,
            body:body
        })
        const result = await inblog.save()
         res.redirect('/');
    } catch (error) {
        res.status(500).send(error.message)
    }
}

static editBlog =  async(req, res, next) => {
    try {
        const editblog = await blogModel.findById(req.params.id)
        res.render('edit',{data: editblog, title: 'Edit Blog page'});
      } catch (error) {
        console.log(error);
      }
}

static updateBlog =  async(req, res) => {
    try {
        const {etitle, ebody} = req.body;
        // console.log(req.body);
          const result = await blogModel.findByIdAndUpdate(req.params.id, {
            title:etitle,
            body:ebody,           
          })
            res.redirect('/');
      } catch (error) {
        console.log(error);
      }        
}

static deleteBlog =  async(req, res) => {
    try {
        const result = await blogModel.findByIdAndDelete(req.params.id)
    res.redirect('/')
  } catch (error) {
    
  }
}

}
module.exports = blogController