const User=require('../models/user')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs');

const createUser=async (req,res)=>{
    const {name,email,age,address,password}=req.body
    try {
        const userExist=await User.findOne({where:{email}})
        if(!userExist)
        {
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)
       const user=  await User.create({name:name,email:email,age:age,address:address,password:hashedPassword});
       res.json({success:true,user:{
           id:user.id,
           name:user.name,
           email:user.email,
           age:user.age,
           address:user.address
       }})
    }
    else{
        res.status(400).json({"success":false,message:"user email already exist"})
    }
    } catch (error) {
        console.log(error)
    }        
}
const loginUser=async(req,res)=>{
    const {email,password}=req.body
    const user=await User.findOne({
        where: {email}})
    if(user && (await bcrypt.compare(password,user.password)))
    {
        res.json({"success":true,user:{
         id:user.id,
         name:user.name,
         email:user.email,
         age:user.age,
         address:user.address,
         token:generateToken(user.id)
     }})
    }
    else res.json({"success":false,message:"Invalid credation"}).status(400)
}
const updateUserProfile=async(req,res)=>{
    try {
        const {name,age,address}=req.body
        const {id}=req.user
      const user=  await User.update({
            name,age,address
        },{
            where:{id}
        })

      res.json({success:true,message:"data updated well done"})

    } catch (error) {
        res.status(500).json(error)
    }

}

// generate token 
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'30d'})
}

module.exports={
    createUser,loginUser,updateUserProfile
}