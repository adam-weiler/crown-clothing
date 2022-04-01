import { useState, useContext } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import { UserContext } from '../../contexts/user.context';

import './sign-up-form.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: 'rainrain',
    confirmPassword: 'rainrain',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    // console.log(formFields)



    const { setCurrentUser } = useContext(UserContext);




    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // We don't want any default behaviour of the form.

        if (password != confirmPassword) { // Confirm the 2 passwords match.
            alert('passwords do not match.');
            return;
        };

        try { // Check if we've authenticated the user with email & password.
            const { user } = await createAuthUserWithEmailAndPassword(  // Try to create new authentication with email and password.
                email, 
                password,
            );
            console.log(user)



            setCurrentUser(user);


            await createUserDocumentFromAuth(user, { displayName });    // Using user returned from auth, try to create a user document with user and optional display name.
            resetFormFields();

        } catch(error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use.');
            }
            console.log('user creation encountered an error: ', error);
        }
    }

    const handleChange = (event) => { // We wanted to generacize this handleChange, so it will work with all 4 input fields.
        const {name, value} = event.target; // Return the input field's name, and value based on which input triggered the event.

        setFormFields({ ...formFields, [name]: value }); // Spread in this object, & just modify the 1 value depending on which input the user is typing in.
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password.</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Display Name'
                    type='text'
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}
                />

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

                <FormInput
                    label='Confirm Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword}
                    minLength='8'
                />

                <Button type="submit">Sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;