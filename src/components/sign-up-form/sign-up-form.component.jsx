import { useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: 'John',
    email: '123@fake.st',
    password: '1fJ3K8(53Jfa3*',
    confirmPassword: '1fJ3K8(53Jfa3*',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    // console.log(formFields)

    const handleSubmit = async (event) => {
        event.preventDefault(); // We don't want any default behaviour of the form.

        // const displayName = event.target[0].value;
        // const email = event.target[1].value;
        // const password = event.target[2].value;
        // cost confirmPassword = event.target[3].value;

        // console.log(displayName, email, password, confirmPassword)

        // console.log(event)
        // console.log(event.target[0].value)
        // console.log(event.target[1].value)
        // console.log(event.target[2].value)
        // console.log(event.target[3].value)
        // console.log(event.target[4].value)
        // console.log(event.target)

        // Confirm the 2 passwords match.
        if (password != confirmPassword) {
            console.log('passwords dont match')
            return;
        };

        console.log('passwords match')

        // Check if we've authenticated the user with email & password.
        const {user} = await createAuthUserWithEmailAndPassword(email, password);
        console.log(user);

        //We need to create a user document from what this returns.
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    const handleChange = (event) => { // We wanted to generacize this handleChange, so it will work with all 4 input fields.
        const {name, value} = event.target; // Return the input field's name, and value based on which input triggered the event.

        setFormFields({ ...formFields, [name]: value }); // Spread in this object, & just modify the 1 value depending on which input the user is typing in.
    }

    return (
        <div>
            <h1>Sign up with your email and password.</h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <label>Email</label>
                <input type="email" required onChange={handleChange} name="email" value={email} />

                <label>Password</label>
                <input type="password" required onChange={handleChange} name="password" value={password} />

                <label>Confirm Password</label>
                <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignUpForm;