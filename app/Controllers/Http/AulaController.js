'use strict'

const Aula = use('App/Models/Aula')
const Disciplina = use('App/Models/Disciplina')

class AulaController {

    async index({ request, params, auth}) {
        const {disciplina_id} = params

        const query = Aula.query()
            .where('disciplina_id', disciplina_id)
        
        return query.fetch()
    }

    async store({request, params}) {
        const {disciplina_id} = params
        const data = request.only(['ordem', 'nome', 'pagians', 'resumo'])

        return await Aula.create({...data, disciplina_id})
    }

    async update({ request, params }) {
        const data = request.only(['ordem', 'nome', 'pagians', 'resumo'])

        const update = await Aula.query().where('id', params.id).update(data)

        return await Aula.find(params.id)
    }

    async destroy({params}) {
        const del = Aula.query()
        .where('id', params.id)
        .delete()

        return del
    }

}

module.exports = AulaController
