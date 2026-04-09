const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const app = require("../app"); 

describe("Security API Tests", () => {
  const validData = [
    { questionId: "Q1", answer: "hello123", confirmAnswer: "hello123" },
    { questionId: "Q2", answer: "world123", confirmAnswer: "world123" }
  ];

  it("should fail if fields are empty", async () => {
    const res = await request(app)
      .post("/api/security")
      .send([{ questionId: "", answer: "", confirmAnswer: "" }
      ]);
    expect(res.status).to.equal(400);
    expect(res.body.error).to.exist;
  });

  it("should fail if answer length is too short", async () => {
    const res = await request(app)
      .post("/api/security")
      .send([{ questionId: "Q1", answer: "a", confirmAnswer: "a" }]);
    expect(res.status).to.equal(400);
  });

  it("should fail for duplicate question IDs", async () => {
    const res = await request(app)
      .post("/api/security")
      .send([
        { questionId: "Q1", answer: "abc123", confirmAnswer: "abc123" },
        { questionId: "Q1", answer: "xyz123", confirmAnswer: "xyz123" }
      ]);
    expect(res.status).to.equal(400);
    expect(res.body.error).to.equal("Duplicate questions not allowed");
  });

  it("should fail if answers do not match", async () => {
    const res = await request(app)
      .post("/api/security")
      .send([{ questionId: "Q1", answer: "abc123", confirmAnswer: "wrong" }]);
    expect(res.status).to.equal(400);
  });

  it("should save valid answers", async () => {
    const res = await request(app)
      .post("/api/security")
      .send(validData);
    expect(res.status).to.equal(200);
    expect(res.body.message).to.equal("Answers saved successfully!");
  });

});