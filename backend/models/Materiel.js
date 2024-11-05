const mongoose  =require('mongoose')




const materielSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true   
    }, 

    marque: {
        type: String,
        required: true   
    },
    
    modele: {
        type: String,
        required: true   
    },
    
    
    typeConnectique: {
        type: String,
        required: true   
    },
    
    poids: {
        type: Number,
        required: true   
    },
    
    quantite: {
        type: Number,
        required: true   
    },
    quantiteDisponible: {
        type: Number,
        required: true,
           
    },
    
    categorie: {
        type: String,
        required: true   
    },
    
    description: {
        type: String,
         
    }, 

    isDeleted: {
        type: String,
        default:null
    }
},
{
    timestamps: true
}
)


const Materiel = mongoose.model('Materiel',materielSchema)

module.exports = {
    Materiel
}