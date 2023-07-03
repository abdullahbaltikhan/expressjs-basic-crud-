const bcrypt = require('bcrypt')
const userModel = require('../models/userModel')

class userController {
    
static register =  async(req, res) => {
    try {
        // const appss = await Apps.find()
        res.render('registration', {title: 'New User Registeration Form'});
    } catch (error) {
        res.status(500).send(error.message)
    }
}

static storeUser =  async(req, res) => {
    try {
        const passbcrypt = await bcrypt.hash(req.body.password, 5)
        const newUser = new userModel({
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            password:passbcrypt,
        })
        const result = await newUser.save()
        res.redirect('login')
    } catch (error) {
        res.status(500).send(error.message)
    }
}
static verifylogin =  async(req, res) => {
    try {
        const {email, password} = req.body
        const result = await userModel.findOne({email:email})
        const isMatch = await bcrypt.compare(password, result.password)
        if (result.email == email && isMatch) {
            req.session.user_id = result._id
            res.redirect('profile')
        }else{
            res.send('email or password wrong')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

static login =  async(req, res) => {
    try {
        // const appss = await Apps.find()
        res.render('login',{title: 'User Login Form'});
    } catch (error) {
        res.status(500).send(error.message)
    }
}

static profile =  async(req, res) => {
    try {
        // const appss = await Apps.find()
        // const user = await userModel.findOne({email:email})
        res.render('profile',{title: 'User Profile Page'});
    } catch (error) {
        res.status(500).send(error.message)
    }
}
static logout =  async(req, res) => {
    try {
        req.session.destroy()
         res.redirect('/users/login');
    } catch (error) {
        res.status(500).send(error.message)
    }
}

}
module.exports = userController