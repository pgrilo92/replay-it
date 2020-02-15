import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import MainPage from '../mainPage/MainPage'
class App extends React.Component {
  
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
                <button className="login-btn"> Login </button>
              </div>
              <footer>
                Joaquim Grilo &copy;
              </footer>
              </>) }} />
          <Route exact path='/replay' render={props =>{
            return( <MainPage {...props} />
            )
          }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
