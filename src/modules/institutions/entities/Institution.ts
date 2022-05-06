import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("institutions")
class Institution {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  abbreviation: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Institution };
