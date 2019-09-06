import React from 'react';
import './sign-in.style.scss';

export default class SignIn extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            email: "",
            password: ""
        }
        
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState( (state) => {
            return { [name]: value }
        } )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
        this.setState({email: "", password: ""})
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>So you've account, Login here</h2>
                <span>Sign in with your Email and password</span>
                <form className='flex flex-column w-30' onSubmit={this.handleSubmit}>
                    <input 
                        type="email"
                        name="email" 
                        id="email" 
                        placeholder='Enter your email'
                        onChange={this.handleChange} 
                        required
                     />
                    <label htmlFor="email">Email</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder='password please'
                        onChange={this.handleChange}  
                        required 
                    />
                    <label htmlFor="password">Password</label>
                    <button type='submit'>Submit</button>
                    <button type='button'>Sign in with Google</button>
                </form>
                
            </div>
        )
    }
}