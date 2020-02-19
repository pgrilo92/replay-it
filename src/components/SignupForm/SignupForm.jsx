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

    render() {
        return (
            <div className='SignupPage'>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="form-header col-12">
                            <h2>Sign Up</h2>
                        </div>
                        <div className="form-group col-12">
                            <input type="text" name="name" placeholder="Enter Name" value={this.state.name}  onChange={this.handleChange} className="form-control" />
                        </div>
                        <div className="form-group col-12">
                            <input type="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange} className="form-control" />
                        </div>
                        <div className="form-group col-12">
                            <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} className="form-control" />
                        </div>
                        <div className="form-group col-12">
                            <input type="password" name="passwordConf" placeholder="Confirm Password" value={this.state.passwordConf} onChange={this.handleChange} className="form-control" />
                        </div>
                        <div className="form-group col-12">
                            <button className="btn btn-primary" disabled={this.isFormInvalid()}>Sign Up</button> &nbsp;&nbsp;
                            <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignupForm
