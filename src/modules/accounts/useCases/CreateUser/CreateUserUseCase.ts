import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({
    name,
    email,
    username,
    institution,
    password,
  }: ICreateUserDTO): Promise<void> {
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new Error("Email already exists");
    }

    const userAlreadyExists = await this.usersRepository.findByUsername(
      username
    );

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      username,
      institution,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };
