import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { UsersModule } from './user/user.module';

@Module({
    components: [],
    controllers: [AppController],
    modules: [UsersModule],
})
export class ApplicationModule {}
