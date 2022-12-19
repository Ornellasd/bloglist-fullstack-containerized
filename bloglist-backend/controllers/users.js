const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await User
    .find({}).populate('blogs', { url: 1, title: 1, author: 1, postedAt: 1, id: 1 })

  response.json(users.map(user => user.toJSON()))
})

usersRouter.post('/', async (request, response) => {
  const body = request.body
  const saltRounds = 10

  if(body.password.length < 3) {
    return response.status(400).json({
      error: 'password is too short(3 characters minimum)'
    })
  }

  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    firstName: body.firstName,
    lastName: body.lastName,
    username: body.username,
    passwordHash
  })
  
  const savedUser = await user.save()

  response.json(savedUser)
})

module.exports = usersRouter