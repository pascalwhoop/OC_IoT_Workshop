'use strict';

describe('Service: displayService', function () {

  // load the service's module
  beforeEach(module('ioTworkshopWebappApp'));

  // instantiate service
  var displayService;
  beforeEach(inject(function (_displayService_) {
    displayService = _displayService_;
  }));

  it('should do something', function () {
    expect(!!displayService).toBe(true);
  });

});
