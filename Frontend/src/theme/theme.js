import { createMuiTheme } from '@material-ui/core/styles'
import {orange , teal} from '@material-ui/core/colors';


const theme = createMuiTheme({
  palette: {
      primary: {
        main: orange[500],
        light: orange[200],
        dark: orange[900],
        contrastText: '#fff',
      },
      secondary: {
          main: teal[500],
          light: teal[100],
      }
  },
  typography: {
      h6: {
          fontWeight: 300,
      }
  }
})

export default theme
