export interface IFollow {
  id: number;
  user_id: number;
  username: string;
  fullName: string;
  email: string;
  picture: string;
  description: string;
  follow?: any[];
}
