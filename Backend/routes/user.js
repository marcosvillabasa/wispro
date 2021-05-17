const User = require('../models/user')
const server = require('express').Router()
const jwt = require('jsonwebtoken')
const { verifyToken } = require('../middlewares/auth')

server.post('/user', verifyToken, (req, res) => {
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

server.get('/users', verifyToken, (req, res) => {
  User.find({})
    .then(resp => res.json({ ok: true, users: resp }))
    .catch(err => res.status(500).json({ ok: false, err }))
})

server.get('/user/:id', verifyToken, (req, res) => {
  User.findById(req.params.id)
    .then(resp => res.json({ ok: true, user: resp }))
    .catch(err => res.status(500).json({ ok: false, err }))
})

server.delete('/user/:id', verifyToken, (req, res) => {
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

server.post('/login', (req, res) => {
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
