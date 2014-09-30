'use strict';

(function() {
  var Application = window.Application = function() {
    this._run();
  };

  // override point for tests to keep application from running.
  // this is the place that you should kick off things after page
  // load for the actual application, but the tests won't execute
  // this before they run.
  Application.prototype._run = function() {
    this.hideHeader();
  };

  Application.prototype.hideHeader = function() {
    var mainHeader = $('body > h1');
    if (mainHeader.length === 0) {
      throw new Error('Could not hide main header!');
    }
    mainHeader.hide();
  };

  $(function() {
    window.application = new Application();
  });
}());


  var validator = new FormValidator('form1', [{
      name: 'name',
      display: 'required',
      rules: 'required'
  }
  // ,{
  //     name: 'alphanumeric',
  //     rules: 'alpha_numeric'
  // }, {
  //     name: 'password',
  //     rules: 'required'
  // }, {
  //     name: 'password_confirm',
  //     display: 'password confirmation',
  //     rules: 'required|matches[password]'
  // }, {
  //     name: 'email',
  //     rules: 'valid_email',
  //     depends: function() {
  //         return Math.random() > .5;
  //     }
  // }, {
  //     name: 'minlength',
  //     display: 'min length',
  //     rules: 'min_length[8]'
  // }
  ], function(errors, event) {
      if (errors.length > 0) {
          // Show the errors
      }
});
