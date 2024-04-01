export interface IUser {
  id?: number;
  email?: string;
  fullName?: string;
  username?: string;
  picture?: string;
  bio?: string;
  followers_count?: any[];
  followings_count?: any[];
}

export interface IUserRegister {
  fullName: string;
  username: string;
  email: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
