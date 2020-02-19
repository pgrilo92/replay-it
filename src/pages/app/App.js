import React from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom'
import MainPage from '../MainPage/MainPage'
import LoginPage from '../LoginPage/LoginPage'
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../services/userService'
import Header from '../../components/Header/Header'

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
              (props) => {
              return(
                userService.getUser() ? 
                <>
                <Header 
                {...props}
                user={props.user} 
                handleLogout={this.handleLogout}
                user={this.state.user}
                />
                <MainPage 
                  {...props}  
                  user={this.state.user}
                />
                </>
                :
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
          <Route exact path='/login' render={({history}) =>{
            return(
              <LoginPage 
                history={history} 
                handleSignupOrLogin={this.handleSignupOrLogin} 
              />
            )
          }}
          />
          <Route exact path='/signup' render={({history}) =>{
            return( 
              <SignupPage 
                history={history} 
                handleSignupOrLogin={this.handleSignupOrLogin} 
              />
            )
          }}
          />
        </Switch>
      </div>
    )
  }
}

export default App
