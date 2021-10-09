import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import LoginPage from '../features/authPage/loginPage/LoginPage'
import RegisterPage from '../features/authPage/registerPage/RegisterPage'

const RootProvider: React.FC = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {children}
      </Switch>
    </BrowserRouter>
  </Provider>
)


const App = () => {
  return (
    <RootProvider>
      <Route path='/login' exact={true}>
        <LoginPage />
      </Route>
      <Route path='/register' exact={true}>
        <RegisterPage />
      </Route>
    </RootProvider>
  )
}

export default App