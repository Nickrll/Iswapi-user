import { Test, TestingModule } from '@nestjs/testing';
import User from '../src/user/models/user.entity';
import { UserRepository } from '../src/user/userRepository';
import { UserController } from '../src/user/user.controller';
import { UserService } from '../src/user/user.service';

describe('UserController', () => {
  //create a Mock for the database
  const mockUser = new User();

  let mockUserService = {
    welcome: () => "Welcome to the User API",
    getUser: (id: string) => undefined,
    addUser: (user: User) => (!user ? undefined : mockUser),
    updUser: () => [mockUser],
    delUser: (id: string) => undefined
  };
  
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    userService = new UserService(new UserRepository());
    userController = new UserController(userService);

    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    userController = app.get<UserController>(UserController);
  });

  describe('root', () => {
    it('"', () => {
      expect(userController.baseGet()).toBe('Welcome to the User API');
    });
  });
});
