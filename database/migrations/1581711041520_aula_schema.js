'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AulaSchema extends Schema {
  up () {
    this.create('aulas', (table) => {
      table.increments()
      table.integer('disciplina_id').unsigned()
      table.integer('ordem').unsigned()
      table.string('nome')
      table.integer('pagians')
      table.text('resumo')
      table.timestamps()
    })
  }

  down () {
    this.drop('aulas')
  }
}

module.exports = AulaSchema
