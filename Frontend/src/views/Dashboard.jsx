import React, { useEffect } from 'react'
import DataTable from '../components/table/DataTable'
import { Box } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../redux/actions/userCrud'
import AddIcon from '@material-ui/icons/Add'

import DialogForm from '../components/dialog/DialogForm'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nombre', headerName: 'Nombre', width: 130 },
  { field: 'apellido', headerName: 'Apellido', width: 130 },
  {
    field: 'dni',
    headerName: 'Dni',
    type: 'number',
    width: 130,
  },
  {
    field: 'domicilio',
    headerName: 'Domicilio',
    sortable: false,
    width: 160,
  },
  {
    field: 'fechaAlta',
    headerName: 'Fecha Alta',
    type: 'date',
    width: 160,
  },
]

const Dashboard = () => {
  const users = useSelector(state => state.users.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <Box width='80%' m="1rem auto">
      <Box display="flex" justifyContent="flex-end" m={1}>
        <DialogForm edit={false}>
          <AddIcon />
        </DialogForm>
      </Box>
      <DataTable rows={users} columns={columns} />
    </Box>
  )
}

export default Dashboard
