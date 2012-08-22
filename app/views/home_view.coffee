View = require './view'
template = require './templates/home'

module.exports = class HomeView extends View
  id: 'home-view'
  initialize: ->
    $('button').live 'click', (e)=>
      login = $(e.target).attr('data-login')
      filter = $(e.target).attr('data-filter')
      if login and filter
          $(e.target).parents('tr').remove()
          @filters[filter] = @filters[filter] or []
          @filters[filter].push login
          @count--
          @afterRender()

  template: template
  users: []
  filters: { }
  afterRender: =>
      $('#filters').html( JSON.stringify(@filters) )
      $('#count').html( '('+@count+' to go!)' )


  getRenderData: =>
      filter = (user) =>
          return _.all( @filters, (list) => user.login not in list)
      out= {
        u: _.filter(@users, filter)
      }
      @count = out.u.length
      return out
