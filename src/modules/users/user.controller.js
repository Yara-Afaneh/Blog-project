import blogModel from "../../../DB/model/blog.model.js";
import userModel from "../../../DB/model/user.model.js";

export const getusers =async (req,res)=>{
    try{
        const users = await userModel.findAll({
            include:blogModel,
            
        });
        return res.json({message:'success',data:users})
    } catch(err){
        return res.json('error',err);
    }
   
}

export const deleteUser=async(req,res)=>{
    try{
        const {id} = req.params;
        const user =await userModel.destroy({
            where: {
              id
            }   
          });
        if(!user){
            return res.json('user not found');
        }
          return res.json({message:'success', user:user});
    } catch(err){
        return res.json('error',err);
    }
  
}

export const updateUser=async(req,res)=>{
    try{
        const {id}=req.params;
    const {name} = req.body;
    const user =await userModel.update({ name }, {
        where: {
          id
        }
      });
     if(!user){
         return res.json('user not found');
     }
       return res.json({message:'success', user:user});
    }catch(err){
        return res.json({message:'error', err});
    }
    
 }