import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from './models/user.entity';
import { UserRepository } from './userRepository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) {}


  welcome(): string {
    return "Welcome to the User API";
  }

  async getUser(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async addUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async delUser(id: string) {
    return await this.userRepository.delete(id);
  }

  async updUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}
