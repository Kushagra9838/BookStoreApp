import User from '../model/user.model.js'
import bcryptjs from 'bcryptjs'

export const signUp = async (req, res)=>{
    const {name, email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(user){
            res.status(400).json({message: "user already exist"});
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            name :name,
            email: email,
            password: hashPassword,
        })
        await createdUser.save();
        res.status(201).json({message: "user created successfully", user:{
            _id: createdUser.id,
            name: createdUser.name,
            email: createdUser.email
        }});
    }catch(error){
        res.status(500).json({message: "internal server error"});
    }
}

export const login = async (req, res)=>{
    const {email, password}=req.body;
    try{
        const user = await User.findOne({email});
        const isMatch =await bcryptjs.compare(password, user.password);
        if(!user || !isMatch){
            res.status(400).json({message: "Invalid, credentials"});
        }
        else{
            res.status(200).json({message: "Login successfull", user:{
                _id: user.id,
                name: user.name,
                password: user.password,
            }});
        }
    }catch(error){
        console.log("Error", error.message);
        res.status(500).json({message: "internal server error"});
    }
}