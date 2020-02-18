import React from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import './SignupPage.css'
import Header from '../../components/Header/Header'

class SignupPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {message: ''}
    }

    updateMessage = (msg) => {
        this.setState({message: msg})
    }

    render(){
        return (
            <div>
                <Header />
                <div className='SignupPage'>
                    <SignupForm {...this.props} updateMessage={this.updateMessage} />
                    <p>{this.state.mesage}</p>
                </div>
            </div>
        )
    }
}

export default SignupPage
