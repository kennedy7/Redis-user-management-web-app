const express = require("express");
const { SearchUser, Adduser, DeleteUser } = require("./controls");
router = express.Router()

router.get('/', (req, res)=>{
    res.render ('home')
})
router.get('/users/search', (req, res)=>{
    res.render ('home')
})
//search processing         
router.post('/users/search', SearchUser)

router.get('/user/add', (req, res)=>{
    res.render ('adduser' )
})
router.post('/user/add', Adduser)
router.delete('/user/delete/:id', DeleteUser)


module.exports = { router };