var express = require('express');
var router = express.Router();

const auth = require('../middleware/auth')
const session = require('express-session')

const sessionSecret = "mywebsessionsecreatalwjwjjw"
router.use(session({secret:sessionSecret}));

const userCon = require('../controllers/userController')
router.get('/registration',auth.isLogot, userCon.register);
router.post('/registration', userCon.storeUser);
router.get('/login',auth.isLogot, userCon.login);
router.post('/login', userCon.verifylogin);
router.get('/profile',auth.isLogin, userCon.profile);
router.get('/logout',auth.isLogin, userCon.logout);


module.exports = router;
