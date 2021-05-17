import React, { useState } from 'react'

import { Box, Grid, Switch, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ImgLogin from '../components/imgLogin/ImgLogin'
import FormLogin from '../components/forms/FormLogin'
import FormCreate from '../components/forms/FormCreate'

const useStyles = makeStyles(({ palette }) => ({
  loginContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  login: {
    borderRadius: '9px',
    border: `1px solid ${palette.secondary.main}`,
    width: '60vw',
    height: '80%',
    color: palette.primary.dark,
    background: 'white',
  },
  bgImg: {
    background: palette.secondary.light,
    borderRadius: '9px 0 0 9px',
  },
  bgForm: {
    backgroundColor: '#FBFCFC',
    borderRadius: '0 9px 9px 0',
  },
}))

const LoginScreen = () => {
  const classes = useStyles()
  const [login, setLogin] = useState(true)

  const handleChange = event => {
    setLogin(login => !login)
  }
  return (
    <Box className={classes.loginContainer}>
      <Grid container className={classes.login}>
        <Grid
          item
          xs={5}
          container
          justify="center"
          alignItems="center"
          className={classes.bgImg}
        >
          <ImgLogin />
        </Grid>
        <Grid item xs={7} className={classes.bgForm}>
          <Box display="flex">
            <Switch checked={login} onChange={handleChange} name="Login" />
            <Typography variant='subtitle1' color='secondary'>Login</Typography>
          </Box>
          {
              login ? <FormLogin /> : <FormCreate />
          }
          
        </Grid>
      </Grid>
    </Box>
  )
}

export default LoginScreen
