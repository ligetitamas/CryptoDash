import React from 'react';
import { BarLoader } from 'react-spinners';

const Spinner = ({color = 'blue', size=150}) => {
    const cssOverride= {
        display: 'block',
        margin: '0 auto'
    }
    return (
        <div>
            <BarLoader color={color} size={size} cssOverride={cssOverride} aria-label='loading'></BarLoader>
        </div>
    );
}

export default Spinner;
