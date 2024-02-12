import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Threads } from "./Threads";
import { Follow } from "./Follow";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  username: string;

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

  @OneToMany(() => Follow, (follow) => follow.follower)
  follower: Follow[];

  @OneToMany(() => Follow, (follow) => follow.follower)
  following: Follow[];
}
