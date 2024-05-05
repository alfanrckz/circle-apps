export interface IUser {
  id?: number;
  email?: string;
  fullName?: string;
  username?: string;
  picture?: string;
  cover_photo: string;
  bio?: string;
  followers_count?: number;
  followings_count?: number;
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
