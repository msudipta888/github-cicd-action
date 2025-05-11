const app = require('./app');
const supertest = require('supertest');
const {describe} = require('jest-circus');
const request = supertest(app);

describe("/testnode endpoint",()=>{
    it('should run test', async()=>{
        const res = await request.get('/testnode');
        expect(res.status).toBe(200);
        expect(res.text).toBe('Test node working');
    })
})