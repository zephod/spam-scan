user_list = require 'views/user_list'

module.exports = class Router extends Backbone.Router
  routes:
    '': 'unclassified'
    'unclassified': 'unclassified'
    'staff': 'staff'
    'spam' : 'spam'
    'good' : 'good'
    'bad'  : 'bad'


  spam: -> new user_list('spam').redraw()
  bad: -> new user_list('bad').redraw()
  good: -> new user_list('good').redraw()
  staff: -> new user_list('staff').redraw()
  unclassified: -> new user_list('').redraw()
