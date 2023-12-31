import { HydratedDocument, Model } from "mongoose";

interface IUser {
    id: number;
    role: 'student';
    password: string;
    name: {
        firstName: string;
        midName?: string;
        lastName: string;
    };
    dateOfBirth?: string;
    gender: 'male' | 'female';
    email: string;
    contactNumber: string;
    emergencyContactNumber?: string;
}

// instance
export interface IUserMethods {
    fullName(): string
}
//static
export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
  }


export default IUser;