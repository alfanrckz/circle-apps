import { IUser } from "./user";

export interface IThreadPost {
  content: string;
  image: string | File | undefined;
}

export interface IThreadCard {
  id: number;
  user: IUser;
  created_at: string;
  content: string;
  image: string ;
  likes: ILike[];
  replies: any[] | undefined;
  profile?: number;


}

export interface ILike{
  id: number,
  user: {
    id: number
  }
}
