const isLogin = async (req, res, next) => {
    try {
        if (req.session.user_id) {}
        else{
            res.redirect('/users/profile')
        }
        next()
    } catch (error) {
        console.log(error);
    }
}

const isLogot = async (req, res, next) => {
    try {
        if (req.session.user_id) {            
            res.redirect('/users/profile')
        }
        next()
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    isLogin,
    isLogot
}