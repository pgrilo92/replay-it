import React from 'react'
import {Link} from 'react-router-dom'
import userService from '../../services/userService'


class SignupForm extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: ''
    }

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await userService.signup(this.state)
            this.props.handleSignupOrLogin()
            this.props.history.push('/')
        } catch (err) {
            //catch sign up error
            this.props.updateMessage(err.message)
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <input type="text" name="name" placeholder="Enter Name" value={this.state.name}  onChange={this.handleChange} class="form-control" />
                    </div>
                    <div class="form-group">
                        <input type="email" name="email-address" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} class="form-control" />
                    </div>
                    <div class="form-group">
                        <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} class="form-control" />
                    </div>
                    <div class="form-group">
                        <input type="password" name="passwordConf" placeholder="Confirm Password" value={this.state.passwordConf} onChange={this.handleChange} class="form-control" />
                    </div>
                    <div class="form-group">
                        <button className="btn-default" disabled={this.isFormInvalid()}>Sign Up</button> &nbsp;&nbsp;
                        <Link to='/'>Cancel</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupForm
