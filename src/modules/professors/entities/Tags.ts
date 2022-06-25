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

@Entity("tags")
class Tags {
  @PrimaryColumn()
  id?: string;

  @Column()
  professor_id: string;

  @ManyToOne(() => Professor)
  @JoinColumn({ name: "professor_id" })
  professor: Professor;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Tags };
