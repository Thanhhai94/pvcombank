const express = require('express');
const router = express.Router()
const siteController = require('../app/controllers/SiteController')


// tuyến đường đọc từ trên xuống dưới (phải đi từ cai con tới cha)

router.use('/search',siteController.search)
router.use('/',siteController.home)

module.exports = router