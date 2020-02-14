'use strict'

const User = use('App/Models/User')

class AuthController {

    index() {
        return User.query().setHidden(['password', 'created_at', 'updated_at']).fetch()
    }

    create({ request }) {
        const data = request.only(['email', 'username', 'password'])

        return User.create(data)
    }

    login({ request, auth }) {

        const { email, password } = request.all()

        return auth.attempt(email, password)

    }

    currentUser({auth}) {
        const {id, email, username } = auth.user
        
        return {id, email, username }
    }

}

module.exports = AuthController
