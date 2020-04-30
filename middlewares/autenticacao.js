function autenticacao(req, res, next){
    let {user} = req.session

    if(user != undefined && user != null){
        return next();
    }

    return res.redirect('/login')
}

module.exports  = autenticacao