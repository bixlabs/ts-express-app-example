interface IFakeGenericData {
    [key: number]: any;
}

export class MemoryRepo {
    private idRef = 1;
    private data: IFakeGenericData = {};

    public async create(data: any): Promise<any> {
        const newData = Object.assign(data, {id: this.idRef});
        this.data[newData.id] = newData;
        this.idRef++;

        return newData;
    }

    public async update(id: number, data: any): Promise<any> {
        const existentData = this.data[id];
        if (!existentData) {
            throw new Error(`there's no data by id: ${id}`);
        }

        this.data[id] = Object.assign(this.data[id], data, {id});

        return this.data[id];
    }
}
