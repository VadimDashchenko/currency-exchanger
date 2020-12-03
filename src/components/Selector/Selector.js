import React from 'react';
import './styles.scss';

const Selector = ({data, changeCurrency}) => {
    return(
        <select className="select" onChange={(e) => changeCurrency(e.target.value)}>
            {data.map((i, index) => (
                <option 
                    key={index}
                    className="option"
                    value={`${i.ccy}`}
                >
                    {i.ccy}/{i.base_ccy}
                </option>
            ))}
        </select>
    )
}

export default Selector;