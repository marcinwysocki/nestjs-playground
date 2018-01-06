import { Module } from '@nestjs/common';
import { InMemoryDbService } from './inMemoryDb.service';

@Module({
    components: [InMemoryDbService],
    exports: [InMemoryDbService],
})
export class InMemoryDbModule {}
