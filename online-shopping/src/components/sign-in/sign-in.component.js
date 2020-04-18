import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const {email, password} = this.state

        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        }catch(e){
            console.log(e.message)
        }
    }

    handleChange = (event) => {
        const {value, name} = event.target
        //dynamitlly setting up our value
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput 
                        name = 'email' 
                        type="email" 
                        value = {this.state.email} 
                        required 
                        label='email'
                        handleChange = {this.handleChange}   
                    />
                
                    <FormInput 
                        name = 'password' 
                        type='password' 
                        value ={this.state.password} 
                        required 
                        label='password'
                        handleChange = {this.handleChange}
                     />
               
                    <div className = 'buttons'>
                        <CustomButton type = 'submit'>Sign in</CustomButton>
                        <CustomButton isGoogleSignIn onClick = {signInWithGoogle}>Google Sign in</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn