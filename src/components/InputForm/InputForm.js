import React from 'react';
import './styles.scss';

const InputForm = (props) => {
    const {first, second, currencyChange} = props;
    return(
        <>
            <input 
                className="input"
                name="first"
                type="number"
                min="1"
                value={first}
                onChange={currencyChange}
            />
            <input 
                className="input"
                name="second"
                type="number"
                min="1"
                value={second}
                onChange={currencyChange}
            />
        </>
    )
}

export default InputForm;