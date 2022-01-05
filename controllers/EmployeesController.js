const express = require('express');
const router = express.Router();

router.get('/employees',(req, res)=>{
    res.render('employees/index');
})


module.exports = router;