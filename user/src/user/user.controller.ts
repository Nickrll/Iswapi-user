import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import User from './models/user.entity'
import { CreateUser, UpdateUser } from './models/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/")
  baseGet(): string {
    return this.userService.welcome();
  }

  @Get("/:id")
  async getUser(@Param('id') id): Promise<User> {
    return await this.userService.getUser(id);
  }

  @Post("/")
  async create(@Body() user: CreateUser): Promise<User> {
    const u: User = { ...user };
    return await this.userService.addUser(u);
  }

  @Delete(":id")
  async deleteUser(@Param('id') id: string): Promise<string> {
    const user: User = await this.userService.getUser(id)
    if (!user) {
      throw new BadRequestException(
        `No user with this id :${id}`,
      );
    }
    this.userService.delUser(id);  // better error handeling
    return "User successfully deleted";
  }

  @Put("/")
  async updateUser(@Body() body: UpdateUser): Promise<string> {
    const newUser: User = { ...body };

    if (!newUser) {
      throw new BadRequestException(
        //incorrect implementation of a user JSON
        `cannot update user`,
      );
    }

    await this.userService.getUser(newUser.uuid);

    return "User successfully updated"
  }
}
