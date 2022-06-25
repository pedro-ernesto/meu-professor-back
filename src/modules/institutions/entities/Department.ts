import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Institution } from "./Institution";

@Entity("departments")
class Department {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  institution_id: string;

  @ManyToOne(() => Institution)
  @JoinColumn({ name: "institution_id" })
  institution: Institution;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Department };
