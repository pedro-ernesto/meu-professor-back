import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Professor } from "./Professor";

@Entity("ratings")
class Rating {
  @PrimaryColumn()
  id?: string;

  @Column()
  overral_rating: number;

  @Column()
  teaching_rating: number;

  @Column()
  difficulty_rating: number;

  @Column()
  passed_subject?: boolean;

  @Column()
  comment?: string;

  @Column()
  professor_id: string;

  @ManyToOne(() => Professor)
  @JoinColumn({ name: "professor_id" })
  professor: Professor;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Rating };
