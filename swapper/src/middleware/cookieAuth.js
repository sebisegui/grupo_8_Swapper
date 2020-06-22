function cookieAuth(req,res,next){
    if(req.session.userId || req.cookies.userCookie){
        req.session.userId = req.session.userId;
        req.session.userId = req.cookies.userCookie
    }
next()
}
module.exports = cookieAuth