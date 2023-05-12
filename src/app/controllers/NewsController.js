class NewController {

    //[Get] /news
    index(req,res) {
        res.render('news')
    }

    //[GET] /news/:slug
    show(req,res) {
        res.send('slug')
    }
}

module.exports = new NewController
