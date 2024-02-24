import blogModel from "../../../DB/model/blog.model.js";
import userModel from "../../../DB/model/user.model.js";

export const getblogs = async(req,res)=>{
    try{
        const getblogs = await blogModel.findAll({
            include:userModel
        });
        return res.json({message:'success',blog:getblogs});
      
    }catch(err){
        return res.json({message:err});
    }
}

export const addBlog = async(req,res)=>{
    try{
        const {title,body,userId}=req.body;
        const blog = await blogModel.create({ title,body,userId});
        return res.json({message:'success',blog:blog});
      
    }catch(err){
        return res.json({message:err});
    }


}