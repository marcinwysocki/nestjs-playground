import { Module } from '@nestjs/common';

import { InMemoryDbModule } from '../inMemoryDb/inMemoryDb.module';
import { UsersController } from './user.controller';
import { UsersInMemoryRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
    components: [UsersService, UsersInMemoryRepository],
    controllers: [UsersController],
    modules: [InMemoryDbModule],
})
export class UsersModule {}
