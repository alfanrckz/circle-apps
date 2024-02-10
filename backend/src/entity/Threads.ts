import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { User } from "./User";
import { Like } from "./Like";
import { Reply } from "./Reply";

@Entity()
export class Threads {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  image: string;

  @OneToMany(() => Like, (like) => like.id)
  likes: Like[];

  @OneToMany(() => Reply, (reply) => reply.id)
  replies: Reply[];

  @Column({ default: () => "NOW()" })
  created_at: Date;

  @Column({ default: () => "NOW()" })
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
