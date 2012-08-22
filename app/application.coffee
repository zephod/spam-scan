# The application bootstrapper.
Application =
  initialize: ->
    HomeView = require 'views/home_view'
    Router = require 'lib/router'

    @homeView = new HomeView()
    getData = (data) =>
      @homeView.users = data.users
      @homeView.render()
    getFilters = (data) =>
      @homeView.filters = data
      @homeView.render()

    $.getJSON( 'members.json', null, getData)
    $.getJSON( 'filters.json', null, getFilters)

    # Instantiate the router
    @router = new Router()
    # Freeze the object
    Object.freeze? this

module.exports = Application
