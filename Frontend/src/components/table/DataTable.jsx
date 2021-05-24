import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useHistory } from 'react-router'

import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import VisibilityIcon from '@material-ui/icons/Visibility'

import DialogForm from '../dialog/DialogForm'
import ButtonComponent from '../button/ButtonComponent'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

const DataTable = ({ rows, handleEdit }) => {
  const classes = useStyles()
  let history = useHistory()
  const handleDelete = id => {
    axios
      .delete(`http://localhost:4000/user/${id}`)
      .then(resp => {
        if(resp.status === 200){
            history.push('/dashboard')
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Box width="100%">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>DNI</TableCell>
              <TableCell>Domicilio</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Editar</TableCell>
              <TableCell>Eliminar</TableCell>
              <TableCell>Ver</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.nombre}
                </TableCell>
                <TableCell>{row.apellido}</TableCell>
                <TableCell>{row.dni}</TableCell>
                <TableCell>{row.domicilio}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <DialogForm id={row._id} edit={true}>
                    <EditIcon />
                  </DialogForm>
                </TableCell>
                <TableCell>
                  <ButtonComponent onClick={() => handleDelete(row._id)}>
                    <DeleteIcon />
                  </ButtonComponent>
                </TableCell>
                <TableCell>
                  <DialogForm>
                    <VisibilityIcon />
                  </DialogForm>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

DataTable.propTypes = {
  rows: PropTypes.array.isRequired,
  handleEdit: PropTypes.func,
}

DataTable.defaultProps = {
  rows: [],
}

export default DataTable
