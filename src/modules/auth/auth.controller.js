import userModel from "../../../DB/model/user.model.js";

export const register=async(req,res)=>{
    try{
        const {email,password,name}=req.body;
        const users = await userModel.create({ email,password,name});
        return res.json({message:'success',users});
    }catch(error){
        if(error.original?.errno==1062)
          return res.json({message:'email already in use'});
       
    }
   return res.json({message:'error',error:error.stack});
}

export const login=async(req,res)=>{
  
        const {email,password}=req.body;
        const checkUser = await userModel.findAll({
            attributes:['id','name'],
            where:{email,password}
        });
       if (checkUser.length){
         return res.json({message:'success',user:checkUser});
       } else{
           return res.json({message:'user not found'});
       }
}


