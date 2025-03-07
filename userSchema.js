import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'name field could not be empty']
    },
    lastName: String,
    email: String,
    CreatedAt: {
        type: Date,
        default: Date.now
    },
    UpdatedAt: {
        type: Date,
    }
});
export default userSchema;
