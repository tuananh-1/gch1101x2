const express = require('express');
const LectureModel = require('../models/LectureModel');
const router = express.Router();

router.get('/', async (req, res) => {
   var lectures = await LectureModel.find({});
   
   res.render("lecture/list", { lectures : lectures});
})
router.get('/delete/:id', async (req, res) => {
   await LectureModel.findByIdAndDelete(req.params.id);
   res.redirect('/lecturer');
})

router.get('/add', (req, res) => {
   res.render('lecture/add');
})

router.post('/add', async (req, res) => {
   var lecture = req.body;
   await LectureModel.create(lecture);
   res.redirect('/lecture');
})

router.get('/edit/:id', async (req, res) => {
   var lecture = await LectureModel.findById(req.params.id);
   res.render('lecture/edit', { lecture : lecture});
})

router.post('/edit/:id', async (req, res) => {
   var lecture = await LectureModel.findByIdAndUpdate(req.params.id, req.body);
   res.redirect('/lecture');
})

module.exports = router;