const mongoose = require('mongoose')
const { type } = require('os')
const { isTypedArray } = require('util/types')


const empruntUserSchema = new mongoose.Schema({
emprunts: {
        isDeleted: {
          type: Boolean,
          default: false
        },
  
        data: {
          type: [],
          default: null
        }
    
      }
})

const EmpruntUser = mongoose.model('empruntUser',empruntUserSchema)

module.exports = {EmpruntUser}