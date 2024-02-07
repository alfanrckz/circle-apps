import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import { Threads } from "./Threads";
import { User } from "./User";

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Threads, (thread) => thread.id)
  thread_id: Threads;

  @OneToMany(() => User, (user) => user.id)
  user_id: User;
}
