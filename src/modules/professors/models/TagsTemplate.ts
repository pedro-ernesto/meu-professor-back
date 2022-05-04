class TagsTemplate {
  id?: string;
  name: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = "1";
    }
  }
}

export { TagsTemplate };
