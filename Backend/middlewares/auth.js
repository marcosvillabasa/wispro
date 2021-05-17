const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  let token = req.header('token')
  if (!token)
    return res.status(401).json({ msg: 'No token' })

  try {
    const decoded = jwt.verify(token, 'SECRET')
    req.user = decoded.user
    next()
  } catch (error) {
    res.status(400).send({ msg: 'token is not valid' })
  }
}

module.exports = { verifyToken }
