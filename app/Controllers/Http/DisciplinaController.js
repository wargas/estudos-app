'use strict'

const Disciplina = use('App/Models/Disciplina')

class DisciplinaController {

    async index({ request }) {
        const query = Disciplina.query()
            .setHidden(['created_at', 'updated_at', 'user_id'])
            
        return await query.fetch()
    }

    async store({ request, auth }) {
        const data = request.only(['nome', 'dia'])

        return await Disciplina.create({...data, user_id: auth.user.id})
    }

    async update({ request, params }) {
        const data = request.only(['nome', 'dia'])

        const update = await Disciplina.query()
            .where('id', params.id)
            .update(data)

        return Disciplina.find(params.id)
    }

    async destroy({params}) {
        const del = Disciplina.query()
        .where('id', params.id)
        .delete()

        return del
    }

}

module.exports = DisciplinaController
