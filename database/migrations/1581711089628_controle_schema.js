'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ControleSchema extends Schema {
  up () {
    this.create('controles', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table.integer('aula_id').unsigned()
      table.datetime('horario')
      table.integer('tempo')
      table.timestamps()
    })
  }

  down () {
    this.drop('controles')
  }
}

module.exports = ControleSchema
