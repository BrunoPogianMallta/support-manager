const express = require('express');
const router = express.Router();

router.get('/company',(req, res)=>{
    res.render('company/index');
})


module.exports = router;