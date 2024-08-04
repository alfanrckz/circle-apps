import { IUser } from "./user";

export interface IReply {
  id?: number;
  content?: string;
  user: IUser;
}

export interface IReplyPost {
  conten?: string;
  thread_id?: number;
}
