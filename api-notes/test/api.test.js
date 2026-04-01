const {describe,it}=require("mocha");
const app=require('../server');
const request=require("supertest");
const {expect}=require('chai');

describe('GET /notes',()=>{

it('should return all notes123',async()=>{
const response=await request(app).get('/notes');
expect(response.status).to.equal(200);
expect(response.body).to.be.an('array');
});

it('test create new note',async()=>{
const response=await request(app).post('/notes').send({title:'task1',content:'this is a note'});
expect(response.status).to.equal(201);
});

it('should return 404 for non existing id',async()=>{
const response=await request(app).get('/notes/123');
expect(response.status).to.equal(404);
});

it('should return 400 if title is missing',async()=>{
const response=await request(app).post('/notes').send({content:'no title'});
expect(response.status).to.equal(400);
});

it('should return 400 if content is missing',async()=>{
const response=await request(app).post('/notes').send({title:'no content'});
expect(response.status).to.equal(400);
});

it('should return 404 when deleting non-existing note',async()=>{
const response=await request(app).delete('/notes/123456');
expect(response.status).to.equal(404);
});

it('should return 400 if content contains whitespaces',async()=>{
const response=await request(app).put('/notes/1').send({content:'   '});
expect(response.status).to.equal(400);
});

it('should update note successfully',async()=>{
const createRes=await request(app).post('/notes').send({title:'test',content:'test content'});
const id=createRes.body.id;
const response=await request(app).put(`/notes/${id}`).send({title:'updated',content:'updated content'});
expect(response.status).to.equal(200);
});

it('should return 400 if trying to update the date', async () => {
    const response = await request(app).put('/notes/1').send({ date: '2026-01-01' });
    expect(response.status).to.equal(400);
    expect(response.body.error).to.equal('Date cannot be updated');
});


});