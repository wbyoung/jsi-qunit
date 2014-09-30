'use strict';

var Application = window.Application;

QUnit.test("Application#hideHeader", function(assert) {
  var application = new Application();
  var header = $('<h1/>').appendTo('body');
  application.hideHeader();
  assert.equal($('body > h1').is(':visible'), false, 'Header should not be visible.');
  header.remove();
});
