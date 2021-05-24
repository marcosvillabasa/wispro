import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'

import { Box, Typography, Button } from '@material-ui/core'

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
  if (!values.password) {
    errors.password = 'Contraseña es requerida'
  } else if (values.password.length < 5) {
    errors.password = 'Debe tener 5 caracteres'
  }

  return errors
}

const FormCreate = ({ edit, user }) => {
  const formik = useFormik({
    initialValues: {
      nombre: edit ? user.nombre : '',
      apellido: edit ? user.apellido : '',
      dni: edit ? user.dni : '',
      email: edit ? user.email : '',
      password: edit ? user.password : '',
      fechaAlta: edit ? user.fechaAlta : '',
      domicilio: edit ? user.domicilio : '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      if (edit) {
        console.log('entraa')
        axios
          .put(
            `http://localhost:4000/user/update/${user._id}`,
            values
          )
          .then(resp => console.log(resp))
          .catch(err => console.log(err))
      }else{
        axios
          .post(
            `http://localhost:4000/user`,
            values
          )
          .then(resp => console.log(resp))
          .catch(err => console.log(err))
      }
    },
  })
  return (
    <Box
      width="100%"
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
              <Typography component="span">
                {formik.errors.fechaAlta}
              </Typography>
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
              <Typography component="span">
                {formik.errors.domicilio}
              </Typography>
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
          {!edit && (
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
                <Typography component="span">
                  {formik.errors.password}
                </Typography>
              )}
            </Box>
          )}
          <Box m={1}>
            <Button color="primary" type="submit">
              {edit ? 'Editar' : 'Crear'}
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  )
}

export default FormCreate
