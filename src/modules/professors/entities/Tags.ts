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
import { TagsTemplate } from "./TagsTemplate";

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
  tags_template_id: string;

  @ManyToOne(() => TagsTemplate)
  @JoinColumn({ name: "tags_template_id" })
  tags_template: TagsTemplate;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Tags };
