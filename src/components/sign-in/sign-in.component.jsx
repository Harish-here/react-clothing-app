import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-input/form-input'

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
        this.setState({ [name]: value })
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
                    <FormInput 
                        type="email"
                        name="email"
                        label='Email' 
                        id="email" 
                        handleChange={this.handleChange} 
                        required
                     />
                   
                    <FormInput 
                        type="password" 
                        name="password" 
                        label='Password' 
                        id="password" 
                        handleChange={this.handleChange}  
                        required 
                    />
                    <button type='submit'>Submit</button>
                    <button type='button'>Sign in with Google</button>
                </form>
                
            </div>
        )
    }
}