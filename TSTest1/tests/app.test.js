const getData = require('../../TypescriptJsTestsInVS/wwwroot/js/app');
const getAnotherData = require('../../TypescriptJsTestsInVS/wwwroot/js/app');

//This won't work 
//const separated = require('../../TypescriptJsTestsInVS/wwwroot/js/app').separated;
const separated = require('../../TypescriptJsTestsInVS/wwwroot/js/modules/separated').separated;

//This works if the separated is exported to the module using (inside app.ts): module.exports = separated;
//const separated = require('../../TypescriptJsTestsInVS/wwwroot/js/app');

var assert = require('assert');

describe('Test Suite 1 - functions', function () {
  it('getData - from module', function () {
    assert.ok(true, getData(2));
  })

  it('getAnotherData - from export', function () {
    assert.ok(true, getAnotherData(2));
  })
})

describe('Test Suite 2 - class', function () {
  it('separated.getData', function () {
    assert.ok(true, separated.getDataFromSeparated(2));
  })
})