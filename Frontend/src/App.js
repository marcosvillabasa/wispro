import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/header/Header'
import LoginScreen from './views/LoginScreen'
import Dashboard from './views/Dashboard'
import NotFound from './views/NotFound'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact render={() => <LoginScreen />} />
          <Route path="/dashboard" exact render={() => <Dashboard />} />
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </Router>
    </>
  )
}

export default App
