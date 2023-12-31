const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required:true
    },
    lastname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    confirm:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        default:Date.now
    },
    // messages:[
    //     {
    //         blogtitle:{
    //             type:String,
    //             required:true
    //         },
    //         blogcontent:{
    //             type:String,
    //             required:true
    //         }
    //     }
    // ],
    tokens:[
            {token:{
                        type:String,
                        required:true
            }
        }
    ]
})
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.confirm = await bcrypt.hash(this.confirm, 12);
    }
    next();
})
userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(error){
        console.log(error);
    }
}
// userSchema.methods.addMessage = async function(blogtitle, blogcontent){
//     try{
//         this.messages = this.messages.concat({blogtitle, blogcontent});
//         await this.save();
//         return this.messages;
//     }catch(error){
//             console.log(error);
//     }
// }
const User = mongoose.model('USER', userSchema);
module.exports = User