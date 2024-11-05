const {Employe} = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {EmpruntUser} = require('../models/EmpruntUser')
require('dotenv').config()


const signUp = async (req,res) => {
  
    const {nom,prenom,email,mdp,numTel} = req.body
    console.log(req.body);
    
    
    try {
        if(!nom ||!prenom || !email  || !mdp ||!numTel ) return res.status(400).send({succes:false, message:"tous les champs sont requis"})
        const existEmploye = await Employe.findOne({email})
        if (!existEmploye) {

            const hashmdp =  await bcrypt.hash(mdp,10)

            const newEmploye = new Employe({
                nom,
                prenom,
                email,
                numTel,
                mdp: hashmdp
            })
            const myEmprunt = new EmpruntUser()
            newEmploye.emprunts = myEmprunt._id
            await newEmploye.save()

            res.status(201).send(" utilisateur creer avec success")
            
        } else {
            res.status(401).send("vous avez deja un compte")
        }
        
    } catch (error) {
        
        res.status(500).send(error.message)
        
    }
    
    
}


const signIn = async(req,res)=>{

    const {email,mdp} = req.body
    console.log(req.body);
    

    try {

        if(!email ||!mdp) return res.status(401).send("tout les champs sont requis")
            
            const existEmploye = await Employe.findOne({email})

            if(!existEmploye) return res.status(402).send(' employe inexistant')
                
                const isMatch = await bcrypt.compare(mdp, existEmploye.mdp)
                console.log(isMatch);

                if(!isMatch) return res.status(403).send("mot de passe incorrect")
                const responseEmploye = {...existEmploye._doc, mdp: undefined}
                const token = jwt.sign({id: existEmploye._id},process.env.JWT_SECRET,{
                    expiresIn:'24h'
                })
                
                res.status(200).json({token,responseEmploye})
    
        
    } catch (error) {
        
        return res.status(500).send('erreur de connexion')
    }
}

const getOne = async (req,res)=>{
    const id = req.params.id

    try {
        const oneUser = await Employe.findById({_id:id})
        res.status(200).send(oneUser)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })        
    }
    
}

const update = async (req,res)=>{
    const id = req.params.id
    const {nom,prenom,email,numTel} = req.body
    try {
        const updateUser = await Employe.findByIdAndUpdate({_id:id},{
            nom,
            prenom,
            email,
            numTel
        })

        res.status(200).send(updateUser)

    } catch (error) {
        res.staus(500).send({
            message: error.message
        })        
    }
    
}

const deleteUser = async(req,res)=>{
    const id = req.params.id
    console.log(id);
    try {
        const del = await Employe.findByIdAndUpdate({_id:id},{isDeleted:true})
        
        
        res.status(200).send({
            message: 'compte supprimer avec succes'
        })
    } catch (error) {
        res.staus(400).send({
            message: error.message
        })   
    }


    
}


const setRole = async (req,res)=>{
    const id = req.params.id
    const {role}= req.body
    let r = ''

    try {
        if(role == 'admin') r = "admin"
        if(role == 'client') r = "client"
        if(role == 'employe') r = "employe"
    
        const newStatus = await Employe.findByIdAndUpdate({_id:id},{
            role: r
        })
        
        res.status(200).send('le role a ete mis a jour avec succes')
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}

const getAll = async (req,res)=>{
   
    try {
        const listUser = await Employe.find()
       const returnList = listUser.filter((user)=> user.isDeleted == false)
        //console.log(returnList);
        
        
        res.status(200).send({
            message: 'liste des utilisateur',
            returnList
        })
    } catch (error) {
        res.status(500).send('erreur lors de la recuperation de la liste des utilisateurs')
    }
    
}



const test = async (req,res)=>{
    console.log(req.body);
    
}













module.exports = {
    signUp,
    signIn,
    update,
    getOne,
    deleteUser,
    setRole,
    getAll,
    test
}