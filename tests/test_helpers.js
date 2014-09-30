'use strict';

(function() {
  // don't allow the application to run.
  window.Application.prototype._run = function() {};
}());
