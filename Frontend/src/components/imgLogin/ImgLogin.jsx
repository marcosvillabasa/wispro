import React from 'react'
import login from '../../assets/login.svg'

import { Box } from '@material-ui/core'

const ImgLogin = () => {
  return (
    <Box
      width={345}
      height={143}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <img src={login} alt="Login" style={{ width: '200px' }} />
    </Box>
  )
}

export default ImgLogin
