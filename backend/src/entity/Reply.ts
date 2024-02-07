import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Reply {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  image: string;

  @Column()
  likes: number;

  @Column()
  replies: number;

  @Column({ default: () => "NOW()" })
  created_at: string;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
