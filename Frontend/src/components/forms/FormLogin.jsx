/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useFormik } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import { login } from '../../redux/actions/user'

import { Box, Typography } from '@material-ui/core'

import ButtonComponent from '../button/ButtonComponent'
import TextInput from '../input/TextInput'

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Email es requerido'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Email inválido'
  }
  if (!values.password) {
    errors.password = 'Contraseña es requerida'
  } else if (values.password.length < 5) {
    errors.password = 'Debe tener 5 caracteres'
  }

  return errors
}

const FormLogin = () => {
  const userLogin = useSelector(state => state.login.userLogin)
  let history = useHistory()
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values, {resetForm}) => {
      dispatch(login(values.email, values.password))
      if (userLogin.id !== null) history.push('/dashboard')
      resetForm()
    },
  })
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <form onSubmit={formik.handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flex-start"
          height="100%"
          width="100%"
        >
          <Box m={1}>
            <TextInput
              id="email"
              label="E-mail"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && (
              <Typography component="span">{formik.errors.email}</Typography>
            )}
          </Box>
          <Box m={1}>
            <TextInput
              id="password"
              label="Contraseña"
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && (
              <Typography component="span">{formik.errors.password}</Typography>
            )}
          </Box>
          <Box m={1}>
            <ButtonComponent type="submit" disabled={!formik.isValid}>
              Ingresar
            </ButtonComponent>
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default FormLogin
