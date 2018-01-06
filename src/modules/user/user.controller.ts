import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserDto } from './User';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('/')
    public getAll() {
        return this.usersService.getAllUsers();
    }

    @Post('/')
    public addUser(@Body() user: UserDto) {
        return this.usersService.addUser(user);
    }
}
