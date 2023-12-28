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

export default IUser;