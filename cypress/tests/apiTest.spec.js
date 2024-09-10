describe('Users api testing', () => {
	// get all users
	it('fetche users - GET', () => {
		cy.request('/users?page=2').as('usersRequest')

		cy.get('@usersRequest').then((users) => {
			expect(users.status).to.eq(200)
			assert.isArray(users.body.data, 'Users Response is an array')
		})
	})

	// create a new user
	it('create a new user - POST', () => {
		const newUser = {
			name: 'morpheus',
			job: 'leader',
		}

		cy.request({ method: 'POST', url: '/users', body: newUser }).as(
			'response',
		)

		cy.get('@response').then((response) => {
			expect(response.status).to.eq(201)
			expect(response.body.name).to.eq(newUser.name)
		})
	})

	// update an existing user
	it('update a user - PUT', () => {
		cy.request('/users/2').as('userToUpdate')

		cy.get('@userToUpdate').then((user) => {
			const updatedUser = { ...user.body, job: 'new leader' }

			cy.request({
				method: 'PUT',
				url: `/users/${user.body.id}`,
				body: updatedUser,
			}).as('response')

			cy.get('@response').then((response) => {
				expect(response.status).to.eq(200)
				expect(response.body.job).to.eq(updatedUser.job)
			})
		})
	})

	// delete an existing user
	it('delete a user - DELETE', () => {
		cy.request('/users/2').as('userToDelete')

		cy.get('@userToDelete').then((user) => {
			cy.request({ method: 'DELETE', url: `/users/${user.body.id}` }).as(
				'response',
			)
			cy.get('@response').then((response) => {
				expect(response.status).to.eq(204)
			})
		})
	})
})
