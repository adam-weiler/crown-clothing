import { FormInputLabel, Input, Group } from './form-input.styles.jsx';

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <Input 
                {...otherProps}
            />
        { // If label exists, show the label.
            label && (

        // If otherProps.value.length is greater than 0, apply the 'shrink' class. Otherwise apply no class.
            <FormInputLabel 
                shrink={otherProps.value.length}
            // className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
            >
                {label}
            </FormInputLabel>
        )}
            
        </Group>
    )
}

export default FormInput;