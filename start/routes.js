'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('auth', 'AuthController.create')
Route.post('auth/login', 'AuthController.login')
Route.get('auth', 'AuthController.index')
Route.get('me', 'AuthController.currentUser').middleware('auth')

Route.resource('disciplinas', 'DisciplinaController').middleware('auth')
Route.resource('disciplinas/:disciplina_id/aulas', 'AulaController').middleware('auth')
Route.resource('controle', 'ControleController')
