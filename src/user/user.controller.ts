import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('/api/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async index(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Res() res, @Body() body: CreateUserDto) {
    try {
      const user = await this.userService.create(body);
      return res.status(200).json({ user: user });
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  }
}
