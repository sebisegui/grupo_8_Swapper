function authMiddleware(req,res,next){
    if(req.session.userId == undefined){
        return res.redirect('/products')
    }
    next()
}
module.exports = authMiddleware