import request from 'supertest';
import { expect } from 'chai';
import app from '../src/app';

//const server = supertest.agent('http://localhost:3000');

describe('GET /', function() {
    it('responds with json', function(done) {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) {
                    done(err);
                    return;
                }

                expect(res.body).to.deep.equal({ result: true });
                done();
            });
    });
});