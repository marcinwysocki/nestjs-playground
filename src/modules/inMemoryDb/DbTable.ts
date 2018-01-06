interface IGenericRecordWithId {
    id: number;
    [key: string]: any;
}

export class DbTable<TRecord = IGenericRecordWithId> {
    private records: TRecord[] = [];

    public insert(record: TRecord): TRecord {
        this.records.push(record);

        return record;
    }

    public update(
        updater: (record?: TRecord) => TRecord,
        where?: (record: TRecord) => boolean,
    ): TRecord[] {
        const updated: TRecord[] = [];

        this.records.forEach((record, index) => {
            if (!where || where(record)) {
                const newValue = updater(record);
                this.records[index] = newValue;
                updated.push(record);
            }
        });

        return updated;
    }

    public select<TProjection = TRecord>(
        selector: (record: TRecord) => TProjection = v => v as any,
        where?: (record: TRecord) => boolean,
    ): TProjection[] {
        return this.records
            .filter(record => !where || where(record))
            .map(selector);
    }

    public delete(where?: (record: TRecord) => boolean): void {
        this.records.forEach((record, index) => {
            if (!where || where(record)) {
                this.records.splice(index, 1);
            }
        });
    }
}
