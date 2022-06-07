const express = require("express");
const { SearchUser } = require("./controls");
router = express.Router()

router.get('/', (req, res)=>{
    res.render ('home' )
})
router.get('/users/search', (req, res)=>{
    res.render ('home' )
})

//search processing         
router.post('/users/search', SearchUser)

module.exports = { router };