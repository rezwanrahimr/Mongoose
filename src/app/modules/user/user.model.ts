import { Schema, model } from "mongoose";
import IUser from "./user.interface";

const userSchema = new Schema<IUser>({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        midName: {
            type: String,
        },
        lastName: {
            type: String,
            required: true
        }
    },
    dateOfBirth: {
        type: String
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    email: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    emergencyContactNumber: {
        type: String
    }
})

const User = model<IUser>('Users', userSchema);
export default User;