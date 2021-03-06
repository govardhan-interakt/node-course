const mongoose =require('mongoose')
const validator =require ('validator')
const bcrypt =require('bcryptjs')

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim : true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error ('email is invalid')
            }
        }
        
    },
    age:{
        type:Number,
        validate(value){
            if (value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    },
    password:{
       type:String,
       required:true, 
       minlenght:7,
       trim:true,
       validate(value){
           if (value.toLowerCase().includes('password')){
               throw new Error('password cannot contain "password"')
           }
       }
    }
   
    
})
userSchema.statics.findByCredentials= async(email,password)=>{
    const user = await user.findOne({email})
    if(!user){
        throw new Error ('unable to login')
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw new Error('unable to login')
    }
    return user
}
userSchema.pre('save',async function(next){
    const user =this
if(user.isModified('password')){
    user.password =await bcrypt.hash(user.password,11)

}
    next()
})

const User =mongoose.model('user',userSchema)
module.exports = User