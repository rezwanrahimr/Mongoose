import { Model, Schema, model } from "mongoose";
import IUser, { UserModel } from "./user.interface";

// type UserModle = Model<IUser, {}, IUserMethods>

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

// instance method schema
userSchema.method('fullName', function fullName() {
    return this.name.firstName + '' + this.name.lastName;
})

// static 
userSchema.static('getAdminUsers', async function getAdminUsers() {
    return await this.find({ role: 'admin' });
});

const User = model<IUser, UserModel>('Users', userSchema);
export default User;