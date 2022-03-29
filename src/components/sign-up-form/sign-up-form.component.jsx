import { useState } from 'react';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields)

    const handleChange = (event) => { // We wanted to generacize this handleChange, so it will work with all 4 input fields.
        const {name, value} = event.target; // Return the input field's name, and value based on which input triggered the event.

        setFormFields({ ...formFields, [name]: value }); // Spread in this object, & just modify the 1 value depending on which input the user is typing in.
    }

    return (
        <div>
            <h1>Sign up with your email and password.</h1>
            <form onSubmit={() => {}}>
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