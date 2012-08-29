application = require 'application'

# Define endpoint here
endpoint = 'http://activityapi.herokuapp.com'
#endpoint = 'http://localhost:5000/api/1/person/list'

module.exports = class HomeView extends Backbone.View
  id: 'home-view'
  initialize: (@mode) ->

  users: []

  updatePerson: (row) =>
    return (data) =>
      if data.opinion!=@mode
        #console.log 'removing row',row
        row.remove()
        @count--
        @updateCount

  updateCount: =>
    $('#count').html(@count+' users...')

  receiveData: (data) =>
    #console.log 'got data from server',data
    table = $('#users')
    loading = $('#loading')
    @count = data.data.length;
    @updateCount()
    _.each(data.data, (user) =>
      row = require './templates/row'
      r = $(row user)
      table.append r
    )
    $('button').click (e)=>
      login = $(e.target).attr('data-login')
      opinion = $(e.target).attr('data-filter')
      if login and opinion
          row = $($(e.target).parents('tr')[0])
          #console.log 'applying', login, opinion, row
          $.getJSON endpoint+'/api/1/person/set_opinion?callback=?', {opinion:opinion,login:login}, @updatePerson(row)

    loading.fadeOut('slow')

  redraw: =>
    $('#users').empty()
    $('#loading').show()
    $.getJSON( endpoint+'/api/1/person/list?callback=?', {opinion:@mode}, @receiveData)
    
