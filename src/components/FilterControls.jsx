import React from 'react';
import FilterInput from './FilterInput';

const FilterControls = ({ filter, filterField, isGenericFilter, onFilterChange, onFilterFieldChange, onToggleGenericFilter }) => {
return (
<div className="mb-4">
    <FilterInput filter={filter} onFilterChange={onFilterChange} />
    <label htmlFor="filterField" className="mr-2">Campo de Filtro:</label>
    <input
    id="filterField"
    type="text"
    value={filterField}
    onChange={onFilterFieldChange}
    className="border p-2"
    />
    <label htmlFor="genericFilter" className="ml-4 mr-2">Filtro Genérico:</label>
    <input
    id="genericFilter"
    type="checkbox"
    checked={isGenericFilter}
    onChange={onToggleGenericFilter}
    className="border p-2"
    />
</div>
);
};

export default FilterControls;