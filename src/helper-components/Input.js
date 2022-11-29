import Wrapper from "./Wrapper";

const inputWrapper = Wrapper.bind(null, 'input-wrapper');

export default (placeholder = 'Write something here!', label = null,  inputType = 'input') => {
    
    const labelElement = {
        type: 'label',
        text: label,
        attr: {
            for: label
        }
    }

    const inputElement = {
        type: 'input',
        attr: {
            id: label,
            placeholder,
            name: label,
            type: inputType
        }
    }

    return label
        ? inputWrapper(labelElement, inputElement) 
        : inputWrapper(inputElement);
    
}