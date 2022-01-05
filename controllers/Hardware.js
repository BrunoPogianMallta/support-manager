const express = require('express');
const router = express.Router();

router.get('/hardware',(req, res)=>{
    res.render('hardware/index');
})


module.exports = router;