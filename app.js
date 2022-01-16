const expect = require('expect');
const request = require('supertest');
const express = require('express');

const app = express();

app.get('/test', (req, res) => {
    res.send({ data: true });
})

describe('Testing assertions', () => {

    it('should fail the assertion', (done) => {

        request(app)
        .get('/test')
        .then((res) => {

            expect(3).toBe(4);
            done();

        });


    });

    it('should fail another test', (done) => {

        request(app)
        .get('/test')
        .then(function(res) {

            expect(3).toBe(4);
            done();

        });

    });

    it('should fail another test', (done) => {

        request(app)
        .get('/test')
        .end((err) => {

            expect(3).toBe(4);
            done();

        })

    });

})