(function(/*! Brunch !*/) {
  'use strict';

  if (!this.require) {
    var modules = {};
    var cache = {};
    var __hasProp = ({}).hasOwnProperty;

    var expand = function(root, name) {
      var results = [], parts, part;
      if (/^\.\.?(\/|$)/.test(name)) {
        parts = [root, name].join('/').split('/');
      } else {
        parts = name.split('/');
      }
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part == '..') {
          results.pop();
        } else if (part != '.' && part != '') {
          results.push(part);
        }
      }
      return results.join('/');
    };

    var getFullPath = function(path, fromCache) {
      var store = fromCache ? cache : modules;
      var dirIndex;
      if (__hasProp.call(store, path)) return path;
      dirIndex = expand(path, './index');
      if (__hasProp.call(store, dirIndex)) return dirIndex;
    };
    
    var cacheModule = function(name, path, contentFn) {
      var module = {id: path, exports: {}};
      try {
        cache[path] = module.exports;
        contentFn(module.exports, function(name) {
          return require(name, dirname(path));
        }, module);
        cache[path] = module.exports;
      } catch (err) {
        delete cache[path];
        throw err;
      }
      return cache[path];
    };

    var require = function(name, root) {
      var path = expand(root, name);
      var fullPath;

      if (fullPath = getFullPath(path, true)) {
        return cache[fullPath];
      } else if (fullPath = getFullPath(path, false)) {
        return cacheModule(name, fullPath, modules[fullPath]);
      } else {
        throw new Error("Cannot find module '" + name + "'");
      }
    };

    var dirname = function(path) {
      return path.split('/').slice(0, -1).join('/');
    };

    this.require = function(name) {
      return require(name, '');
    };

    this.require.brunch = true;
    this.require.define = function(bundle) {
      for (var key in bundle) {
        if (__hasProp.call(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    };
  }
}).call(this);
(this.require.define({
  "application": function(exports, require, module) {
    (function() {
  var Application, Router;

  Router = require('lib/router');

  Application = {
    initialize: function() {
      this.router = new Router();
      return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
    }
  };

  module.exports = Application;

}).call(this);

  }
}));
(this.require.define({
  "initialize": function(exports, require, module) {
    (function() {
  var application;

  application = require('application');

  $(function() {
    application.initialize();
    return Backbone.history.start();
  });

}).call(this);

  }
}));
(this.require.define({
  "lib/router": function(exports, require, module) {
    (function() {
  var Router, user_list,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  user_list = require('views/user_list');

  module.exports = Router = (function(_super) {

    __extends(Router, _super);

    function Router() {
      Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {
      '': 'unclassified',
      'unclassified': 'unclassified',
      'staff': 'staff',
      'spam': 'spam',
      'good': 'good',
      'bad': 'bad'
    };

    Router.prototype.spam = function() {
      return new user_list('spam').redraw();
    };

    Router.prototype.bad = function() {
      return new user_list('bad').redraw();
    };

    Router.prototype.good = function() {
      return new user_list('good').redraw();
    };

    Router.prototype.staff = function() {
      return new user_list('staff').redraw();
    };

    Router.prototype.unclassified = function() {
      return new user_list('').redraw();
    };

    return Router;

  })(Backbone.Router);

}).call(this);

  }
}));
(this.require.define({
  "lib/view_helper": function(exports, require, module) {
    (function() {



}).call(this);

  }
}));
(this.require.define({
  "models/collection": function(exports, require, module) {
    (function() {
  var Collection,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  module.exports = Collection = (function(_super) {

    __extends(Collection, _super);

    function Collection() {
      Collection.__super__.constructor.apply(this, arguments);
    }

    return Collection;

  })(Backbone.Collection);

}).call(this);

  }
}));
(this.require.define({
  "models/model": function(exports, require, module) {
    (function() {
  var Model,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  module.exports = Model = (function(_super) {

    __extends(Model, _super);

    function Model() {
      Model.__super__.constructor.apply(this, arguments);
    }

    return Model;

  })(Backbone.Model);

}).call(this);

  }
}));
(this.require.define({
  "views/templates/row": function(exports, require, module) {
    module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<img src=\"";
  foundHelper = helpers.avatar;
  stack1 = foundHelper || depth0.avatar;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "avatar", { hash: {} }); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"/>";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<span>(";
  foundHelper = helpers._opinion;
  stack1 = foundHelper || depth0._opinion;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "_opinion", { hash: {} }); }
  buffer += escapeExpression(stack1) + ")</span>";
  return buffer;}

  buffer += "<tr>\n  <td class=\"name\">";
  foundHelper = helpers.display_name;
  stack1 = foundHelper || depth0.display_name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "display_name", { hash: {} }); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br/><small>";
  foundHelper = helpers.login;
  stack1 = foundHelper || depth0.login;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "login", { hash: {} }); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br/>";
  foundHelper = helpers.email;
  stack1 = foundHelper || depth0.email;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "email", { hash: {} }); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</small></td>\n  <td class=\"website\"><a href=\"";
  foundHelper = helpers.website;
  stack1 = foundHelper || depth0.website;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "website", { hash: {} }); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  foundHelper = helpers.website;
  stack1 = foundHelper || depth0.website;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "website", { hash: {} }); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a><br/><a href=\"http://twitter.com/";
  foundHelper = helpers.twitter;
  stack1 = foundHelper || depth0.twitter;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "twitter", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.twitter;
  stack1 = foundHelper || depth0.twitter;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "twitter", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></td>\n  <td class=\"avatar\">";
  foundHelper = helpers.avatar;
  stack1 = foundHelper || depth0.avatar;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n  <td class=\"about\">";
  foundHelper = helpers.about;
  stack1 = foundHelper || depth0.about;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "about", { hash: {} }); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n  <td class=\"buttons\">\n      <button data-login=\"";
  foundHelper = helpers.login;
  stack1 = foundHelper || depth0.login;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "login", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" data-filter=\"staff\" class=\"btn btn-success\">Staff</button>\n      <button data-login=\"";
  foundHelper = helpers.login;
  stack1 = foundHelper || depth0.login;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "login", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" data-filter=\"good\" class=\"btn btn-info\">Good</button>\n      <button data-login=\"";
  foundHelper = helpers.login;
  stack1 = foundHelper || depth0.login;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "login", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" data-filter=\"bad\" class=\"btn btn-inverse\">Bad</button>\n      <button data-login=\"";
  foundHelper = helpers.login;
  stack1 = foundHelper || depth0.login;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "login", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" data-filter=\"spam\" class=\"btn btn-danger spam\">Spam</button>\n      ";
  foundHelper = helpers._opinion;
  stack1 = foundHelper || depth0._opinion;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </td>\n</tr>\n";
  return buffer;});
  }
}));
(this.require.define({
  "views/user_list": function(exports, require, module) {
    (function() {
  var HomeView, application, endpoint,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  application = require('application');

  endpoint = 'http://activityapi.herokuapp.com';

  module.exports = HomeView = (function(_super) {

    __extends(HomeView, _super);

    function HomeView() {
      this.redraw = __bind(this.redraw, this);
      this.receiveData = __bind(this.receiveData, this);
      this.updateCount = __bind(this.updateCount, this);
      this.updatePerson = __bind(this.updatePerson, this);
      HomeView.__super__.constructor.apply(this, arguments);
    }

    HomeView.prototype.id = 'home-view';

    HomeView.prototype.initialize = function(mode) {
      this.mode = mode;
    };

    HomeView.prototype.users = [];

    HomeView.prototype.updatePerson = function(row) {
      var _this = this;
      return function(data) {
        if (data.opinion !== _this.mode) {
          row.remove();
          _this.count--;
          return _this.updateCount;
        }
      };
    };

    HomeView.prototype.updateCount = function() {
      return $('#count').html(this.count + ' users...');
    };

    HomeView.prototype.receiveData = function(data) {
      var loading, table,
        _this = this;
      table = $('#users');
      loading = $('#loading');
      this.count = data.data.length;
      this.updateCount();
      _.each(data.data, function(user) {
        var r, row;
        row = require('./templates/row');
        r = $(row(user));
        return table.append(r);
      });
      $('button').click(function(e) {
        var login, opinion, row;
        login = $(e.target).attr('data-login');
        opinion = $(e.target).attr('data-filter');
        if (login && opinion) {
          row = $($(e.target).parents('tr')[0]);
          return $.getJSON(endpoint + '/api/1/person/set_opinion?callback=?', {
            opinion: opinion,
            login: login
          }, _this.updatePerson(row));
        }
      });
      return loading.fadeOut('slow');
    };

    HomeView.prototype.redraw = function() {
      $('#users').empty();
      $('#loading').show();
      return $.getJSON(endpoint + '/api/1/person/list?callback=?', {
        opinion: this.mode
      }, this.receiveData);
    };

    return HomeView;

  })(Backbone.View);

}).call(this);

  }
}));
