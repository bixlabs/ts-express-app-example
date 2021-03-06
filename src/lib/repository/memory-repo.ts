import {CrudRepository} from "../../survey/repository/crud-repository";

interface IFakeGenericData {
    [key: number]: any;
}

export class MemoryRepo implements CrudRepository<any, any> {
    private idRef = 1;
    private data: IFakeGenericData = {};

    public async create(data: any): Promise<any> {
        const newData = Object.assign(data, {id: this.idRef});
        this.data[newData.id] = newData;
        this.idRef++;

        return newData;
    }

    public async update(id: number, data: any): Promise<any> {
        const existentData = await this.findById(id);

        this.data[id] = Object.assign(existentData, data, {id});

        return this.data[id];
    }

    public async delete(id: number): Promise<void> {
        await this.findById(id);
        delete this.data[id];
    }

    public async findById(id: number): Promise<any> {
        if (typeof id === "undefined" || id === null) {
            throw new Error("there's no id property present and it's mandatory");
        }

        const existentData = this.data[id];
        if (!existentData) {
            throw new Error(`there's no data by id: ${id}`);
        }

        return existentData;
    }
}
