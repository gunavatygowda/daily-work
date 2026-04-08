const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const app = require("../app");

describe("Backend API Tests", function () {
  it("should reject empty request body", async function () {
    const res = await request(app).post("/api/security").send({});
    expect(res.status).to.be.at.least(400);
  });

  it("should reject missing fields", async function () {
    const res = await request(app).post("/api/security").send([
      { questionId: "Q1", answer: "" } ]);
    expect(res.status).to.be.at.least(400);
  });

  it("should reject mismatched answers", async function () {
    const res = await request(app).post("/api/security").send([
      { questionId: "Q1", answer: "abc", confirmAnswer: "xyz" }]);
    expect(res.status).to.be.at.least(400);
  });

  it("should reject duplicate questions", async function () {
    const res = await request(app).post("/api/security").send([
      { questionId: "Q1", answer: "a", confirmAnswer: "a" },
      { questionId: "Q1", answer: "b", confirmAnswer: "b" }]);
    expect(res.status).to.be.at.least(400);
  });

  it("should accept valid data", async function () {
    const res = await request(app).post("/api/security").send([
      { questionId: "Q1", answer: "a", confirmAnswer: "a" }]);
    expect(res.status).to.be.below(500);
  });
});