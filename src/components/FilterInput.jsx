import React from 'react';

const FilterInput = ({filter, onFilterChange}) => {
    return (        
        <div className="filter">
            <input onChange={(e)=>{onFilterChange(e.target.value)}} type="text" value={filter} placeholder='Filter coins by name or symbol' />
        </div>       
    );
}

export default FilterInput;
