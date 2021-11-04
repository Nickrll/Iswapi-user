import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module'
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot()
  ]
})

export class AppModule {}
