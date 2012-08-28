application = require 'application'
row = require './templates/row'

# Define endpoint here
endpoint = 'http://localhost:5000/api/1/person/list'

module.exports = class HomeView extends Backbone.View
  id: 'home-view'
  initialize: (@mode) ->

  users: []

  receiveData: (data) ->
    console.log 'got data from server',data
    table = $('#users')
    loading = $('#loading')
    $('#count').html(data.data.length+' users...')
    _.each(data.data, (user) =>
      r = $(row user)
      table.append r
    )
    $('button').click (e)=>
      login = $(e.target).attr('data-login')
      filter = $(e.target).attr('data-filter')
      if login and filter
          console.log 'applying', login, filter
    loading.fadeOut('slow')

  redraw: =>
    $('#users').empty()
    $('#loading').show()
    $.getJSON( endpoint+'?callback=?', {opinion:@mode}, @receiveData)
    
