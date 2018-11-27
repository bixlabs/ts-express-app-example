import {MemoryRepo} from "./memory-repo";

test("Allow create data", async () => {
   const repo = new MemoryRepo();

   const value = await repo.create({name: "Julian"});
   expect(value.id).toBe(1);
   expect(value.name).toBe("Julian");
});

test("Allow create more that one data", async () => {
   const repo = new MemoryRepo();
   const value1 = await repo.create({name: "Hello"});
   const value2 = await repo.create({name: "World"});
   expect(value1.id).toBe(1);
   expect(value2.id).toBe(2);
});

test("Allow update previously created data", async () => {
    const repo = new MemoryRepo();
    const value1 = await repo.create({name: "Hello"});
    const value2 = await repo.create({name: "World"});
    expect(value1.id).toBe(1);
    expect(value2.id).toBe(2);
    const updatedValue2 = await repo.update(2, {name: "Cookie"});
    expect(updatedValue2.id).toBe(2);
    expect(updatedValue2.name).toBe("Cookie");
});

test("Cannot update not existent data", async () => {
    const repo = new MemoryRepo();
    const check = async () => {
        await repo.update(1, {});
    };
    expect(check()).rejects.toEqual(new Error("there's no data by id: 1"));
});
