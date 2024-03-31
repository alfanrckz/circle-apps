import { IUser } from "./user";

export interface IThreadPost {
  content: string;
  image: string | File | undefined;
}

export interface IThreadCard {
  id?: number;
  user?: IUser;
  created_at?: string;
  // profile_picture: string;
  // profile_name: string;
  // username: string;
  content?: string;
  image?: string;
  likes?: any[] | undefined;
  replies?: any[] | undefined;
  is_liked?: boolean ;
}
