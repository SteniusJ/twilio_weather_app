import * as chai from 'chai';
import chaiHttp from 'chai-http';
import chaiXml from 'chai-xml'; 

import app from '../src/server.js';

const expect = chai.expect;
const use = chai.use;

const request = use(chaiHttp).request.execute;

use(chaiXml);

describe('/POST', function() {
    it('should return status code 200 and valid xml as response', function() {
        request(app)
            .post('/')
            .end((_err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).xml.to.be.valid();
            });
    });
});
