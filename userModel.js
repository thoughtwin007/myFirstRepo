
import userSchema from '../Schema/userSchema.js';
import mongoose from 'mongoose';
// main().then((res) => {
//     console.log('database connected successfully')
// }).catch((err) => {
//     console.log('some error occured:' + err)
// })
// async function main(params) {
//     await mongoose.connect('mongodb://127.0.0.1:27017/student')
// }
const User = new mongoose.model('User', userSchema)
export default User;