import React from 'react'
import Header from '../../components/Header/Header'
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
                <Header />
                <form class="LoginPage" onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <input type="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} class="form-control" />
                    </div>
                    <div class="form-group">
                        <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} class="form-control" />
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Login" />
                        <Link to='/'>Cancel</Link>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default LoginPage
