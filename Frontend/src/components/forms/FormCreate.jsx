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
  if (!values.nombre) {
    errors.nombre = 'nombre es requerido'
  }
  if (!values.apellido) {
    errors.apellido = 'apellido es requerido'
  }
  if (!values.dni) {
    errors.dni = 'dni es requerido'
  }
  if (!values.domicilio) {
    errors.domicilio = 'domicilio es requerido'
  }
  if (!values.contrasenia) {
    errors.contrasenia = 'Contraseña es requerida'
  } else if (values.contrasenia.length < 5) {
    errors.contrasenia = 'Debe tener 5 caracteres'
  }

  return errors
}

const FormCreate = () => {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      dni: '',
      email: '',
      contrasenia: '',
      fechaAlta:'',
      domicilio: '',
    },
    validate,
    onSubmit: values => {
      console.log(values)
    },
  })
  return (
    <Box
      width="100%"
    //   height="100%"
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
              id="nombre"
              label="Nombre"
              name="nombre"
              type="nombre"
              onChange={formik.handleChange}
              value={formik.values.nombre}
            />
            {formik.errors.nombre && (
              <Typography component="span">{formik.errors.nombre}</Typography>
            )}
          </Box>
          <Box m={1}>
            <TextInput
              id="apellido"
              label="Apellido"
              name="apellido"
              type="apellido"
              onChange={formik.handleChange}
              value={formik.values.apellido}
            />
            {formik.errors.apellido && (
              <Typography component="span">{formik.errors.apellido}</Typography>
            )}
          </Box>
          <Box m={1}>
            <TextInput
              id="dni"
              label="dni"
              name="dni"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.dni}
            />
            {formik.errors.dni && (
              <Typography component="span">{formik.errors.dni}</Typography>
            )}
          </Box>
          <Box m={1}>
            <TextInput
              id="fechaAlta"
              name="fechaAlta"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.fechaAlta}
            />
            {formik.errors.fechaAlta && (
              <Typography component="span">{formik.errors.fechaAlta}</Typography>
            )}
          </Box>
          <Box m={1}>
            <TextInput
              id="domicilio"
              label="Domicilio"
              name="domicilio"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.domicilio}
            />
            {formik.errors.domicilio && (
              <Typography component="span">{formik.errors.domicilio}</Typography>
            )}
          </Box>
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
            <ButtonComponent type="submit" disabled={!formik.isValid}>
              Crear
            </ButtonComponent>
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default FormCreate
