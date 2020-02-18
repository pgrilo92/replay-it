import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom'
import MainPage from '../MainPage/MainPage'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../services/userService'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user: userService.getUser()
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={
              () => {
              return(
                <>
                  <header className="App-header">
                    <h1>Replay.It</h1>
                  </header>
                  <div className="login">
                    <Link to='/login' className="button login-btn"> Login </Link>
                  </div>
                  <footer>
                    Joaquim Grilo &copy;
                  </footer>
                </>
              )}}/>
          <Route exact path='/replay' render={props =>{
            return( <MainPage {...props} />
            )
          }}
          />
          <Route exact path='/login' render={props =>{
            return( <LoginPage {...props} />
            )
          }}
          />
          <Route exact path='/signup' render={props =>{
            return( <SignupPage {...props} />
            )
          }}
          />
        </Switch>
      </div>
    )
  }
}

export default App
