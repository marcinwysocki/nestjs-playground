import { Component } from '@nestjs/common';

import { DbTable } from '../inMemoryDb/DbTable';
import { InMemoryDbService } from '../inMemoryDb/inMemoryDb.service';
import { UserDto } from './User';

export interface IUserEntity extends UserDto {
    id: number;
}

@Component()
export class UsersInMemoryRepository {
    private readonly usersTable: DbTable<IUserEntity>;

    constructor(private readonly dbService: InMemoryDbService) {
        this.usersTable = this.dbService.getTable<IUserEntity>('users');
    }

    public addUser(user: UserDto): IUserEntity {
        const all = this.getAllUsers();
        const id = all.length && all.pop().id + 1;

        const { age, name, surname } = user;

        return this.usersTable.insert({ id, name, surname, age });
    }

    public removeUserById(userId: number): void {
        this.usersTable.delete(user => user.id === userId);
    }

    public getAllUsers(): IUserEntity[] {
        return this.usersTable.select();
    }

    public getUserFullNameById(userId: number) {
        return this.usersTable.select<string>(
            user => `${user.name} ${user.surname}`,
            user => user.id === userId,
        );
    }
}
