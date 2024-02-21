import { IUser } from "./user";

export interface IThreadPost {
  content: string;
  image: Blob | MediaSource | string;
}

export interface IThreadCard {
  id?: number;
  user?: IUser;
  posted_at?: string;
  // profile_picture: string;
  // profile_name: string;
  // username: string;
  content?: string;
  image_content?: string;
  count_like?: number;
  count_replies?: number;
  is_liked?: boolean;
}
