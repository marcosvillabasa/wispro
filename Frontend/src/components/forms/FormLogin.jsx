import React from 'react'
import { useFormik } from 'formik'

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
  if (!values.contrasenia) {
    errors.contrasenia = 'Contraseña es requerida'
  } else if (values.contrasenia.length < 5) {
    errors.contrasenia = 'Debe tener 5 caracteres'
  }

  return errors
}

const FormLogin = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      contrasenia: '',
    },
    validate,
    onSubmit: values => {
      console.log(values)
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
              id="contrasenia"
              label="Contraseña"
              type="password"
              name="contrasenia"
              onChange={formik.handleChange}
              value={formik.values.contrasenia}
            />
            {formik.errors.contrasenia && (
              <Typography component="span">
                {formik.errors.contrasenia}
              </Typography>
            )}
          </Box>
          <Box m={1}>
            <ButtonComponent type="submit" disabled={!formik.isValid}>Ingresar</ButtonComponent>
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default FormLogin
