
const {Materiel} = require('../models/Materiel')
 
const getAll =async (req,res) =>{
   
    try {
        
        const Matos = await Materiel.find()

        const listMatos = Matos.filter(mato => mato.isDeleted !== "delete" && mato.quantiteDisponible > 0 )

        res.status(200).send(listMatos)
    } catch (error) {
        res.status(400).send({
            message: "un erreur c est produite",
            error: error.message
        })
        
    }

}

const getOne = async (req,res) =>{
    const id = req.params.id
    try {
        const matos = await Materiel.findById({_id:id})

        const {nom,modele,marque,poids,quantite,description,typeConnectique,categorie,} = matos

        res.status(200).send({nom,modele,marque,poids,quantite,description,typeConnectique,categorie})
    } catch (error) {
        res.status(400).send({
            message: "un erreur c est produite",
            error: error.message
        })
        
    }
}

const addMatos =async (req,res) =>{
    
    const requestMatos = req.body
    try {

        const existMatos = await Materiel.findOne({ nom: requestMatos.nom})
        console.log(existMatos);
        
        if(existMatos) return res.status(400).send({ 
            message: "ce materiel existe deja"
        })
        const newMatos = new Materiel({
            nom: requestMatos.nom,  
            marque: requestMatos.marque,
            modele: requestMatos.modele,
            typeConnectique: requestMatos.typeConnectique, 
            poids: requestMatos.poids, 
            quantite: requestMatos.quantite,
            categorie: requestMatos.categorie,
            description: requestMatos.description,
            quantiteDisponible: requestMatos.quantite

        })
        await newMatos.save()
        res.status(201).send({
            message: 'materiel ajouter avec success',
            newMatos
        })
    } catch (error) {

        res.status(400).send({
            message: "un erreur c est produite",
            error: error.message
        })
        
    }

}

const updateMatos =async (req,res) =>{
    const id = req.params.id
    const requestMatos = req.body

    const updateData = {};



    try {
            if (requestMatos.nom) updateData.nom = requestMatos.nom;
            if (requestMatos.marque) updateData.marque = requestMatos.marque;
            if (requestMatos.modele) updateData.modele = requestMatos.modele;
            if (requestMatos.typeConnectique) updateData.typeConnectique = requestMatos.typeConnectique;
            if (requestMatos.poids) updateData.poids = requestMatos.poids;
            if (requestMatos.quantite) updateData.quantite = requestMatos.quantite;
            if (requestMatos.categorie) updateData.categorie = requestMatos.categorie;
            if (requestMatos.description) updateData.description = requestMatos.description;
            
        const updateMatos = await Materiel.findByIdAndUpdate({_id:id},{$set: updateData})
        res.status(200).send({
            message: 'materiel mis a jour avec  avec success',
            updateMatos
        }

        )
    } catch (error) {
        res.status(400).send({
            message: "un erreur c est produite",
            error: error.message
        })
    }


}

const deleteMatos =async (req,res) =>{
    const id = req.params.id
    try {
        const deleteMatos = await Materiel.findByIdAndUpdate({_id:id},{
            isDeleted: "delete"
        })

        res.status(200).send({
            message: "le materiel a ete supprimer avec succes"
        })
    } catch (error) {

        res.status(400).send({
            message: "un erreur c est produite",
            error: error.message
        })
        
    }

}









module.exports = {
    deleteMatos,
    updateMatos,
    getAll,
    addMatos,
    getOne

}