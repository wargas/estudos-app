'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SetAulasColunaPaginasSchema extends Schema {
  up () {
    this.drop('aulas')
    this.create('aulas', (table) => {
      table.increments()
      table.integer('disciplina_id').unsigned()
      table.integer('ordem').unsigned()
      table.string('nome')
      table.integer('paginas')
      table.text('resumo')
      table.timestamps()
    })
  }

  down () {
    this.drop('aulas')
  }
}

module.exports = SetAulasColunaPaginasSchema
