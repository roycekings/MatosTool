const mongoose = require('mongoose')

const empruntAttente = new mongoose.Schema({
    status: {
        type:String,
        default: 'attente'
    },
    data: {
        type: {},
        default: null
    }
})

empruntAttente.statics.findEnCour = function (){
    return this.find({status: 'en cour'})
}

empruntAttente.statics.findEnAttente = function (){
    return this.find({status: 'attente'})
}

empruntAttente.statics.findHistorique = function (){
    return this.find({status: 'expire'})
}

empruntAttente.statics.findAccept = function(id){
    return this.find({
        status: 'attente',
        _id: id
    })

}

empruntAttente.statics.findRemttre = function(id){
    return this.find({
        status: 'en cour',
        _id: id
    })

}

empruntAttente.statics.refus = function(id){
    return this.deleteOne({
        _id:id,
        status: 'attente'
    })
} 


const empruntAttenteModel = mongoose.model('demandeEnAttenteDeRes',empruntAttente)

module.exports = {empruntAttenteModel}