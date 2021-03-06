import React from 'react'
import httpClient from '../httpClient.js'

class Signup extends React.Component {
    
    state = {
        fields: {name: '', email: '', password: ''}
    }
    
    onChangeInput(evt) {
        this.setState({
            fields: {
                ...this.state.fields, 
                [evt.target.name]: evt.target.value 
            }
        })
    }

    onFormSubmit(evt) {
        evt.preventDefault()
        httpClient.signUp(this.state.fields).then((user) => {
            this.setState({
                fields: {name: '', email: '', password: ''}
            })
            if(user) {
                this.props.onSignupSuccess(user)
                this.props.history.push('/vip')
            }
        })
    }

    render() {
        const {name, email, password} = this.state.fields 
        return(
            <div className="Login">
                <h1>Sign Up</h1>
                <form onSubmit={this.onFormSubmit.bind(this)} onChange={this.onChangeInput.bind(this)}>
                    <input name="name" type="text" placeholder="Name" value={name}/>
                    <input name="email" type="text" placeholder="Email" value={email}/>
                    <input name="password" type="password" placeholder="Password" value={password} />
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Signup 