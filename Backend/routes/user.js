const User = require('../models/user')
const server = require('express').Router()
const jwt = require('jsonwebtoken')
const { verifyToken } = require('../middlewares/auth')

server.post('/user', (req, res) => {
  const usuario = new User({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    email: req.body.email,
    password: req.body.password,
    dni: req.body.dni,
    domicilio: req.body.domicilio,
    fechaAlta: req.body.fechaAlta,
  })
  usuario
    .save()
    .then(resp => {
      console.log(resp)
      res.status(201).json({ ok: true, usuario })
    })
    .catch(err => res.status(500).json({ ok: false, err }))
})

server.get('/users', (req, res) => {
  User.find({})
    .then(resp => res.json({ ok: true, users: resp }))
    .catch(err => res.status(500).json({ ok: false, err }))
})

server.get('/user/:id', (req, res) => {
  User.findById(req.params.id)
    .then(resp => res.json({ ok: true, user: resp }))
    .catch(err => res.status(500).json({ ok: false, err }))
})

server.delete('/user/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).json({
          ok: false,
          message: 'no se encontro el usuario',
        })
      }
      res.status(200).json({ ok: true, message: 'eliminado' })
    })
    .catch(err => {
      return res.status(500).json({
        ok: false,
        message: 'error al eliminar',
      })
    })
})

server.put('/user/update/:id', (req, res) => {
  console.log(req.params)
  let user = {}
  if (req.body.nombre) user.nombre = req.body.nombre
  if (req.body.apellido) user.apellido = req.body.apellido
  if (req.body.email) user.email = req.body.email
  if (req.body.dni) user.dni = req.body.dni
  if (req.body.domicilio) user.domicilio = req.body.domicilio

  user = { $set: user }
  User.update({ _id: req.params.id }, user)
    .then((resp) => {
      res.json({
        ok:true,
        resp
      })
    })
    .catch(err => {
      console.log(err)
    })
})

server.post('/login', (req, res) => {
  console.log(req.body)
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user.password !== req.body.password) {
        res.status(500).json({
          ok: false,
          err: 'No coinciden las contraseñas',
        })
      }
      const token = jwt.sign({ user }, 'SECRET', { expiresIn: 3600 })

      res.status(200).json({
        ok: true,
        user,
        token,
      })
    })
    .catch(err => res.status(500).json({ ok: false, err: 'algo mal' }))
})

module.exports = server
