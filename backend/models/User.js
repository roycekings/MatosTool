const mongoose = require('mongoose')
//const{Schema,model} = require("mongoose")



const employeSchema = new mongoose.Schema({
    nom:{
        type: String,
        required : true,
    },
    prenom:{
        type: String,
        required : true,
    },

    email:{
        type: String,
        required : true,
        unique:true
    },

    numTel:{
        type: String,
        required : true,
        unique:true
    },

    mdp:{
        type: String,
        required : true,

    },

    isDeleted:{
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['admin','employe','client'],
        default: 'employe'
    },
    emprunts: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'empruntUser'
    }
},
{
    timestamps: true
}
)




const Employe = mongoose.model("Employe",employeSchema)

module.exports= {Employe}