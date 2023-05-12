const express = require('express');
const router = express.Router()
const newController = require('../app/controllers/NewsController')


// tuyến đường đọc từ trên xuống dưới (phải đi từ cai con tới cha)

router.use('/:slug',newController.show)
router.use('/',newController.index)

module.exports = router