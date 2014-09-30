'use strict';

var Application = window.Application;

QUnit.test("Application#hideHeader", function(assert) {
  var application = new Application();
  var header = $('<h1/>').appendTo('body');
  application.hideHeader();
  assert.equal($('body > h1').is(':visible'), false, 'Header should not be visible.');
  header.remove();
});

QUnit.test("Application#hideHeader failure", function(assert) {
  var application = new Application();
  assert.throws(function() {
    application.hideHeader();
  }, /could not hide/i, 'Expected hiding of header to fail with no header present.');
});

// QUnit.test("expecting number for credit card", function(assert) {
//   var application = new Application();
//   var cardNumber = $('inputcredit'.appendTo('form'))
//   application.validate();
//   assert.equal($(cardNumber).is('555'), true, 'This is a number.');
// });
