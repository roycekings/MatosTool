const {empruntAttenteModel} = require('../models/EmpruntAttente') 
const {Materiel} = require('../models/Materiel')
const addDemandeEmprunt = async (req,res)=>{
    const demande = req.body 

try {
    if(!demande) return res.status(400).send('erreur panier vide')
    
        const newDemande = new empruntAttenteModel({
            data: demande
        })
        await newDemande.save()
        res.status(200).send('demanbde ajouter a la liste d attente')
} catch (error) {
    console.log(error);
    res.status(500).send(error.message)
    
}
} 

const getAllDemande =  async (req,res)=>{

    try {
        const datas = await empruntAttenteModel.findEnAttente()
        if(!datas) return res.status(400).send('aucune demande n est disponible')
        res.status(200).send(datas)    
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
} 

const getHistorique = async (req,res)=>{
    try {

        const data = await empruntAttenteModel.findHistorique()
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)  
    }
}

const getEnCours = async(req,res)=>{

    try {

        const data = await empruntAttenteModel.findEnCour()
        res.status(200).send(data)
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)  
    }


}

const getDemandeUser = async (req,res)=>{

  try {
    let tab = []
    const {id} = req.params
    let datas = await empruntAttenteModel.findEnAttente()

     datas = datas.filter(d => d.data._id == id  )

    res.status(200).send(datas)
    console.log(datas);
    
  } catch (error) {
    console.log(error);
    
    res.status(400).send(error.message)
    
  }
    

} 


const getEnCourUser= async (req,res)=>{

    try {
      let tab = []
      const {id} = req.params
      let datas = await empruntAttenteModel.findEnCour()
  
       datas = datas.filter(d => d.data._id == id  )
  
      res.status(200).send(datas)
      console.log(datas);
      
    } catch (error) {
      console.log(error);
      
      res.status(400).send(error.message)
      
    }
      
  
  } 

  const getHistoriqueUser  = async (req,res)=>{

    try {
      let tab = []
      const {id} = req.params
      let datas = await empruntAttenteModel.findHistorique()
  
       datas = datas.filter(d => d.data._id == id  )
  
      res.status(200).send(datas)
      console.log(datas);
      
    } catch (error) {
      console.log(error);
      
      res.status(400).send(error.message)
      
    }
      
  
  } 

  const handleAccep = async (req,res)=>{
   
    const {id} = req.params
     try {
        const newEmprunt = await empruntAttenteModel.findAccept({_id:id})
       // console.log(newEmprunt);

        const panier = newEmprunt[0].data.panier
        const idMatos = [...new Set(panier.map(item => item._id))];
        console.log(idMatos);
        
        for(let id of idMatos){
          const matos = await Materiel.findById({_id: id})
          
          matos.quantiteDisponible = matos.quantiteDisponible - 1

         await matos.save()
        }
   
      newEmprunt[0].status = 'en cour'
      await newEmprunt[0].save()
     
     res.status(200).send('emprunt en cour')

     } catch (error) {
        res.status(400).send(error.message)
        console.error(error);
                
     }

  }


  const handleRemettre = async (req,res)=>{
   
    const {id} = req.params
     try {
        const newEmprunt = await empruntAttenteModel.findRemttre({_id:id})
        console.log(newEmprunt);

        const panier = newEmprunt[0].data.panier
        const idMatos = [...new Set(panier.map(item => item._id))];
        console.log(idMatos);
        
        for(let id of idMatos){
          const matos = await Materiel.findById({_id: id})
          
          matos.quantiteDisponible = matos.quantiteDisponible +1 

         await matos.save()
        }
   
         newEmprunt[0].status = 'expire'
         await newEmprunt[0].save()
     
         res.status(200).send('emprunt expire')

    } catch (error) {
        res.status(400).send(error.message)
        console.error(error);
                
     }

  }

  const handleRefus = async (req,res)=>{

    const {id} = req.params
    try {
       const newEmprunt = await empruntAttenteModel.refus({_id:id})

    
    res.status(200).send('emprunt refuser')

    } catch (error) {
       res.status(400).send(error.message)
       console.error(error);
               
    }
  }
  





module.exports = {
    getDemandeUser,
    getHistorique,
    addDemandeEmprunt,
    getEnCours,
    getAllDemande,
    getHistoriqueUser,
    getEnCourUser,
    handleAccep,
    handleRefus,
    handleRemettre
    
}