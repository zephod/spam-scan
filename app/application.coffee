Router = require 'lib/router'

# The application bootstrapper.
Application =
  initialize: ->
    @router = new Router()
    Object.freeze? this

module.exports = Application
