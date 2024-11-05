const express = require('express')
const {signUp,signIn,deleteUser,setRole,getAll, update,getOne} = require('../controllers/auth.controller')
const verifToken = require('../middleware/verifToken')
const router = express.Router()



router.post('/auth/signup',signUp) 
router.post('/auth/signin',signIn)
router.get('/profil/update/:id',verifToken,getOne) 
router.put('/profil/update/:id',verifToken,update)
router.put('/profil/delete/:id',verifToken,deleteUser)
router.put('/admin/setrole/:id',verifToken,setRole)
router.get('/admin/getall',verifToken,getAll)






module.exports = router