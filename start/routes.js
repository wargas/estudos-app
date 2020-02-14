'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/teste', ({ view }) => {
  return view.render('index')
})

Route.group(() => {
  Route.post('auth', 'AuthController.create')
  Route.post('auth/login', 'AuthController.login')
  Route.get('auth', 'AuthController.index')
  Route.get('me', 'AuthController.currentUser').middleware('auth')

  Route.resource('disciplinas', 'DisciplinaController').middleware('auth')
  Route.resource('disciplinas/:disciplina_id/aulas', 'AulaController').middleware('auth')
  Route.resource('controle', 'ControleController')
}).prefix('api/v4')
