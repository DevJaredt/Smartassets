export interface ICLient {
    id: string;
    name: string;
    lastName: string;
    age: number;
    phoneNumber: number;
    email: string;
    password: string;
    imageUrl?: string;
  }
  
  export interface ICreateClient extends Omit<ICLient, 'id' | 'email' | 'password'> {}
  
  export interface IAuthClient extends Pick<ICLient, 'email' | 'password'> {}

export interface IUpdateUser extends Partial<Omit<ICLient, 'id' | 'email' | 'password'>> {}
