import './button.styles.scss';

// 3 types of buttons:
// -Default button
// -Inverted-colours
// -Google sign in.

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
}

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button 
            className={[`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`]} 
            {...otherProps}>
            {children}
        </button>
    )
}

export default Button;