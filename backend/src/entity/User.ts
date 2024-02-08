import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Threads } from "./Threads";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  userName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  picture: string;

  @Column({ nullable: true })
  cover_photo: string;

  @Column({ nullable: true })
  bio: string;

  @OneToMany(() => Threads, (thread) => thread.user)
  threads: Threads[];

  @ManyToOne(() => User, (user) => user.id)
  follower: User[];

  @ManyToOne(() => User, (user) => user.id)
  following: User[];
}
