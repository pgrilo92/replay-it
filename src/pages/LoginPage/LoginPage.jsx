import React from 'react'
import userService from '../../services/userService'
import {Link} from 'react-router-dom'
import './LoginPage.css'


class LoginPage extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await userService.login(this.state)
            this.props.handleSignupOrLogin()
            this.props.history.push('/')
        } catch (err) {
            alert('Invalid Credentials!')
        }
    }

    render() {
        return (
            <div>
                <form class="LoginPage" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="form-header col-12">
                            <h2>Login</h2>
                        </div>
                        <div className="form-group col-12">
                            <input type="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} class="form-control" />
                        </div>
                        <div className="form-group col-12">
                            <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} class="form-control" />
                        </div>
                        <div className="form-group col-12">
                            <button className="btn btn-primary" >Login</button>&nbsp;&nbsp;
                            <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default LoginPage
