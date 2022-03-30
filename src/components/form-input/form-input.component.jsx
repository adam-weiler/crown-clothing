import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className="group">
            <input 
                className='form-input'
                {...otherProps}
            />
        { // If label exists, show the label.
            label && (

        // If otherProps.value.length is greater than 0, apply the 'shrink' class. Otherwise apply no class.
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
        )}
            
        </div>
    )
}

export default FormInput;