'use strict';

(function() {
  var Application = window.Application = function() {
    this._run();
  };

  // override point for tests to keep application from running.
  Application.prototype._run = function() {
    this.hideHeader();
  };

  Application.prototype.hideHeader = function() {
    $('body > h1').hide();
  };

  $(function() {
    window.application = new Application();
  });
}());
