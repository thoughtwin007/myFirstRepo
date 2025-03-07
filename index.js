import mongoose from 'mongoose';
async function main() {
    await mongoose.connect('mongodb+srv://parth:WGICmnCT4AzKfw1Y@cluster0.lij2x.mongodb.net/student?retryWrites=true&w=majority&appName=Cluster0/')
}
import User from './models/userModel.js';
import express from 'express';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', async (req, res) => {
    let data = await User.find({});
    res.send(data)
})
app.post('/user', async (req, res) => {
    let data = req.body;
    console.log(data)
    await User.insertOne(data).then(() => res.send('data added'))
})
app.put('/user/:id', async (req, res) => {
    let { id } = req.params;
    console.log(id)
    let content = req.body
    if (Object.keys(content).length <= 1) res.send('update at least 2 values if you want to update single value only than got to PaTch request')
    else {
        // content = { ...content, UpdatedAt: Date.now() };
        console.log(`content:${content}`)
        User.replaceOne({ _id: id }, { content }).then((result) => { console.log(result); res.send('data updated') })
    }
})
app.patch('/user/:id', async (req, res) => {
    let { id } = req.params;
    let content = req.body;
    if (Object.keys(content).length > 1) res.send('only one field can be update if you want to update more than one field go to put request')
    else {
        User.findByIdAndUpdate(id, content).then((result) => {
            console.log(result);
            res.send('inside data updated')
        })
    }
})
app.delete('/user/:id', (req, res) => {
    let { id } = req.params;
    User.findByIdAndDelete(id).then(() => res.send('data deleted'))
})
app.listen(8080, () => {
    console.log('we are listening on port 8080')
})



main().then(() => {
    console.log('database connected successfully')
}).catch((err) => {
    console.log('some error occured:' + err)
})