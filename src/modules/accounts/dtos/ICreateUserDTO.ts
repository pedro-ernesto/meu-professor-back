interface ICreateUserDTO {
  name: string;
  username: string;
  password: string;
  email: string;
  institution: string;
  id?: string;
  avatar?: string;
}

export { ICreateUserDTO };
