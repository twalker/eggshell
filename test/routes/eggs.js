var chai = require("chai"),
  assert = chai.assert,
  expect = chai.expect,
  request = require('supertest'),
  express = require('express');

var app = require('../../app');

describe('GET /api/eggs', function(){
  it('should respond with json', function(done){
    request(app)
      .get('/api/eggs')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  })
})