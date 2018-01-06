import { Component } from '@nestjs/common';

import { DbTable } from './DbTable';

@Component()
export class InMemoryDbService {
    private tables: { [name: string]: DbTable<any> } = {};

    public getTable<T>(name: string): DbTable<T> {
        if (!this.tables[name]) {
            this.tables[name] = new DbTable<T>();
        }

        return this.tables[name] as DbTable<T>;
    }
}
