/*global browser, by */

'use strict';

describe('E2E: Home page', function() {

  beforeEach(function() {
    browser.get('/');
    browser.waitForAngular();
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Kitchen');
  });

  it('should route correctly', function() {
    expect(browser.getLocationAbsUrl()).toMatch('/');
  });

  it('should show the number defined in the controller', function() {
    var element = browser.findElement(by.css('.jumbotron'));
    expect(element.getText()).toContain('kitchen');
  });

  it('should have projects', function() {
    var element = browser.findElement(by.css('a[href="/projects"]'));
    expect(element.getText()).toContain('Projects');
  });

});
