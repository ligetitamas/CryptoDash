import React from 'react';

const LimitSelector = ({limit, onLimitChange}) => {
    return (
        <div className='controls'>
            <label htmlFor="limit">Show:</label>
            <select onChange={(e)=> onLimitChange(e.target.value)} name="" id="limit" value={limit}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            </select>
        </div>
    );
}

export default LimitSelector;
