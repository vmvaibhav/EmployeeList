const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('This is a get call from main page.');
});


module.exports = router;