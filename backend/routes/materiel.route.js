const express = require("express")
const verifToken = require('../middleware/verifToken')
const {addMatos,deleteMatos,getAll,updateMatos,getOne} = require("../controllers/materiel.controller")

const router = express.Router()



router.get('/materiel/getall',getAll)
router.post('/materiel/add',addMatos)
router.put('/materiel/update/:id',updateMatos)
router.put('/materiel/delete/:id',deleteMatos)
router.get('/materiel/getOne/:id',getOne)


module.exports = {
    MAterielRouter: router
}