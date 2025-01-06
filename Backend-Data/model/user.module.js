import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Name is required']
    },
    email:{
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true
    },
    password:{
        type:String,
        required: [true, 'Password is required'],
        trim: true,
        minilength: [6, "Password must be at least 6 characters long"]
    },
    cartItems:{
        quantity: {
            type: Number,
            default: 1
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    },
    role:{
        type:String,
        enum: ['customer', 'admin'],
        default: 'customer'
    },
    // createdAt, updated
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

// Pre-save hook to password before saving to database
userSchema.pre('save', async (next) => {
    if(!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error)
    }
})

userSchema.methods.comparePassword = async (pass) => {
    return await bcrypt.compare(pass, this.password);
}
export default User;