import { Component } from '@nestjs/common';

import { UserDto } from './User';
import { IUserEntity, UsersInMemoryRepository } from './users.repository';

@Component()
export class UsersService {
    constructor(private readonly usersRepository: UsersInMemoryRepository) {}

    public getAllUsers() {
        return this.usersRepository.getAllUsers();
    }

    public addUser(user: UserDto): IUserEntity {
        return this.usersRepository.addUser(user);
    }
}
