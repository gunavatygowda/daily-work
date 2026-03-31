const { describe, it } = require("mocha");
const request = require("supertest");
const { expect } = require("chai");
const app = require("../app"); 

describe('Testing Notes API', () => {

    it('should get all notes', async () => {
        const res = await request(app).get('/notes');

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });

});