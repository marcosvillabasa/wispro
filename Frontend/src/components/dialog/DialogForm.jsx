import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import ButtonComponent from '../button/ButtonComponent'
import FormCreate from '../forms/FormCreate'

const DialogForm = ({ children, id, edit }) => {
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/${id}`)
      .then(resp => {
        setUser(resp.data.user)
      })
      .catch(err => {
        console.log(err, 'aca')
      })
  }, [])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <ButtonComponent variant={`${edit ? "outlined" : 'contained'}`} onClick={handleClickOpen}>
        {children}
      </ButtonComponent>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar Usuario</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Éste formulario permite editar los datos de un usuario
          </DialogContentText>
          <FormCreate edit={edit} user={user} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default DialogForm
