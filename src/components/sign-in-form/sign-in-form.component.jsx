import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInUserWithEmailandPassword } from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: 'rain@gmail.com',
    password: 'rainrain',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    // console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // We don't want any default behaviour of the form.

        console.log('handlesubmit')

        try { // Check if we've authenticated the user with email & password.
            const { user } = await signInUserWithEmailandPassword(  // Try to create new authentication with email and password.
                email, 
                password,
            );
            console.log(user)
            console.log('something happened')

            // await createUserDocumentFromAuth(user);    // Using user returned from auth, try to create a user document with user and optional display name.
            resetFormFields();

        } catch(error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use.');
            }
            console.log('user login encountered an error: ', error);
        }
    }

    const handleChange = (event) => { // We wanted to generacize this handleChange, so it will work with all 4 input fields.
        const {name, value} = event.target; // Return the input field's name, and value based on which input triggered the event.

        setFormFields({ ...formFields, [name]: value }); // Spread in this object, & just modify the 1 value depending on which input the user is typing in.
    }

    return (
        <div className='sign-up-container'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password.</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                    minLength='8'
                />

                <Button type="submit">Sign in</Button>
                
            </form>
        </div>
    );
}

export default SignInForm;