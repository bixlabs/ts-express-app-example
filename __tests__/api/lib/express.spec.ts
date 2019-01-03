import express from "express";
import request from "supertest";
import {wrapper} from "../../../src/api/lib/express";

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

app.get("/error", wrapper(async () => {
    throw new Error("dummy error");
}));

test("It should resolve async code successfully", async () => {
    const result = await request(app).get("/");
    expect(result.status).toEqual(200);
});

test("It should reject async code successfully", async () => {
    const result = await request(app).get("/error");
    expect(result.status).toEqual(500);
});
