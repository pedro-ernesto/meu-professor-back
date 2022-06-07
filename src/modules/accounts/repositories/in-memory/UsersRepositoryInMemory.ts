import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    name,
    email,
    username,
    institution,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, { name, username, email, password, institution });

    this.users.push(user);
  }
  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
  async findByUsername(username: string): Promise<User> {
    const user = this.users.find((user) => user.username === username);
    return user;
  }
  async findByID(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);
    return user;
  }
}

export { UsersRepositoryInMemory };
