export interface CrudRepository<I, T> {
    create(data: I): Promise<T>;

    update(id: number, data: I): Promise<T>;

    delete(id: number): Promise<void>;

    findById(id: number): Promise<T>;
}
