import React from 'react';

const FilterInput = ({ filter, onFilterChange }) => (
<div className="mb-4">
    <input
        type="text"
        value={filter}
        onChange={onFilterChange}
        placeholder="Filtrar pelo Campo"
        className="border p-2 w-full"
    />
</div>
);

export default FilterInput;