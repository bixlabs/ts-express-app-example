import express from "express";
import request from "supertest";
import {wrapper} from "./express";

function sleep(duration: number) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), duration);
    });
}

const app = express();
app.get("/", wrapper(async (req, res) => {
    await sleep(100);
    res.send();
}));

app.get("/error", wrapper(async (req, res) => {
    throw new Error("dummy error");
}));

test("It should response correctly in async way manner", async () => {
    const result = await request(app).get("/");
    expect(result.status).toEqual(200);
});

test("It should response correctly in async way manner", async () => {
    const result = await request(app).get("/error");
    expect(result.status).toEqual(500);
});
