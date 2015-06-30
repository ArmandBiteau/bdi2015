'use strict';

describe('Directive: bdiNav', function () {

  // load the directive's module
  beforeEach(module('bdi2015App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<bdi-nav></bdi-nav>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bdiNav directive');
  }));
});
