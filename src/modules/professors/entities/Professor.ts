import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Institution } from "../../institutions/entities/Institution";
import { Department } from "./Department";
import { Subject } from "./Subject";

@Entity("professors")
class Professor {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  institution_id: string;

  @ManyToOne(() => Institution)
  @JoinColumn({ name: "institution_id" })
  institution: Institution;

  @Column()
  subject_id: string;

  @ManyToOne(() => Subject)
  @JoinColumn({ name: "subject_id" })
  subject: Subject;

  @Column()
  department_id: string;

  @ManyToOne(() => Department)
  @JoinColumn({ name: "department_id" })
  department: Department;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Professor };
