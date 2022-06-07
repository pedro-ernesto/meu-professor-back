import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../CreateUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });
  it("Should be able to authenticate User", async () => {
    const user: ICreateUserDTO = {
      name: "Test Name",
      username: "Test Username",
      password: "231",
      email: "user@test.com",
      institution: "Test Institution",
    };
    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });
    expect(result).toHaveProperty("token");
  });
  it("Should not be able to authenticate due to non existing user", () => {
    expect(async () => {
      const result = await authenticateUserUseCase.execute({
        email: "false@test.com",
        password: "123456",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
  it("Should not be able to authenticate due to incorrect password", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        name: "Test Name 2",
        username: "Test Username 2",
        password: "231",
        email: "user2@test.com",
        institution: "Test Institution 2",
      };
      await createUserUseCase.execute(user);

      const result = await authenticateUserUseCase.execute({
        email: user.email,
        password: "000",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
