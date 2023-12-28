import mongoose from "mongoose";
import app from "./app";

const port = 5000


//Database Connection
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-practice');
        app.listen(port, () => {
            console.log(`Mongoose Practice server listening on port ${port}`)
        })
    } catch (error) {
        console.log("Server Database Connection Problem: ", error);
    }

}
main();


