const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5000


//Database Connection
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-practice');
        console.log("Database connect")
    } catch (error) {
        console.log("Server Database Connection Problem: ", error);
    }

}
main();
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Mongoose Practice server listening on port ${port}`)
})