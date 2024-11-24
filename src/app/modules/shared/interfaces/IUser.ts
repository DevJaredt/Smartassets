export interface IUser {
    id: string;
    name: string;
    lastName: string;
    age: number;
    phoneNumber: number;
    email: string;
    password: string;
    imageUrl?: string;
    role?: string;
  }
  
export interface ICreateUser extends Omit<IUser, 'id' | 'email' | 'password'> {
  role?: string;
}
  
export interface IAuthUSer extends Pick<IUser, 'email' | 'password'> {}

export interface IUpdateUser extends Partial<Omit<IUser, 'id' | 'email' | 'password'>> {}
