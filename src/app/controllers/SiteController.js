class SiteController {

    //[Get] /site
    home(req,res) {
        res.render('home')
    }

    //[GET] /site/
    search(req,res) {
        res.render('search')
    }
}

module.exports = new SiteController
