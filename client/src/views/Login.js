import React from 'react'

class Login extends React.Component {
    render() {
        return(
            <div className="Login">
                <h1>Log In</h1>
                <form>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login