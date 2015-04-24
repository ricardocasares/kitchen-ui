/*global angular */

'use strict';
var PeopleCtrl = require('./controllers/people');
describe('Unit: PeopleCtrl', function() {

  var ctrl;

  beforeEach(function() {
    // instantiate the app module
    ctrl = new PeopleCtrl({data: true});
    
  });

  it('should exist', function() {
    expect(ctrl).toBeDefined();
  });

  it('should have a number variable equal to 1234', function() {
    expect(ctrl.number).toEqual(1234);
  });

  it('should have a data variable defined', function() {
    expect(ctrl.data).toBeDefined();
  });

  it('should have a title variable equal to \'People!\'', function() {
    expect(ctrl.title).toEqual('People!');
  });

});
