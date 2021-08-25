const express = require('express')
const routes = require('./routes');
const request = require('supertest');

const app = express();

app.use('/create', routes);
describe('routes', ()=>{
  it('GET /create', async ()=>{
    const request = await request(app).get('/create');
    expect(request).toEqual({});
  })
})