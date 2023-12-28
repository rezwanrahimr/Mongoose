import User from "./user.model";


export const createUserToDB = async () => {
    const user = await new User({
        id: 2,
        role: 'student',
        password: '123456',
        name: {
            firstName: 'Rezwan2',
            midName: 'Rahim',
            lastName: 'Rupak'
        },
        dateOfBirth: '21-10-2001',
        gender: 'Male',
        email: 'rezwanrahim99@gmail.com',
        contactNumber: '01678392594',
        emergencyContactNumber: '01678392594'
    })
    await user.save();
}
