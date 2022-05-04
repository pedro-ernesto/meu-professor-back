class Institution {
  id?: string;
  name: string;
  abbreviation: string;
  created_at: Date;
  update_at: Date;

  constructor() {
    if (!this.id) {
      this.id = "1";
    }
  }
}

export { Institution };
