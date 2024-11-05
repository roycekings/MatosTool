const {Router} = require('express')
const {handleRemettre,handleAccep,handleRefus,getEnCourUser,getHistoriqueUser,getDemandeUser,getEnCours,getHistorique,addDemandeEmprunt,getAllDemande} = require('../controllers/empruntController')
const router = Router()

router.post('/admin/demandeemprunt',addDemandeEmprunt)
router.put('/admin/demandeemprunt/accept/:id',handleAccep)
router.put('/admin/demandeemprunt/refus/:id',handleRefus)
router.put('/admin/demandeemprunt/remettre/:id',handleRemettre)
router.get('/admin/getdemandeEmprunt',getAllDemande)
router.get('/admin/getencour',getEnCours)
router.get('/admin/gethistorique',getHistorique)
router.get('/user/getDemandeaUser/:id',getDemandeUser)
router.get('/user/getencouruser/:id',getEnCourUser)
router.get('/user/gethistoriqueuser/:id',getHistoriqueUser)



module.exports = { 
    empruntRoute: router
}