const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async ()=>{

try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log('connection a la base de donne reussi');
        
        
 
} catch (error) {

    console.log('erreur de connexion a la base de3 donne', error.message);
    
    
}
}


module.exports = connectDB