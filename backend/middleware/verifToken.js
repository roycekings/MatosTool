
const jwt = require('jsonwebtoken')
require('dotenv').config()
const verifToken = (req,res,next)=>{
    const token = req.headers['authorization']

   
    
    try {
        if(!token) return res.status(400).send("token invalide")

            jwt.verify(token, process.env.JWT_SECRET,(err,user)=>{
                if (err) return res.status(400).send("token invalide")
                    next() 
            })  
          
                
            
    } catch (error) {
        console.log(error);
        
        
    }
   
    
}

module.exports = verifToken