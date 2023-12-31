import IUser from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  await user.save();
  return user;
};

export const getUsersFormDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFormDB = async (payload: string | number) => {
  const user = await User.findOne({ id: payload });
  return user;
};

export const getAdminUserFromDB = async () => {
  const adminUsers = await User.getAdminUsers();
  return adminUsers;
}
