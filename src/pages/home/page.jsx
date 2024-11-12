import React, { useState } from 'react';
import useFetchData from '../../hooks/useFetchData';
import FilterControls from '../../components/FilterControls';
import AffiliateCount from '../../components/AffiliateCount';
import DataTable from '../../components/DataTable';

const Home = () => {
  const { data, loading } = useFetchData('cadrastro');
  const [filter, setFilter] = useState('');
  const [filterField, setFilterField] = useState('afilhiado');
  const [isGenericFilter, setIsGenericFilter] = useState(false);

  const filterHandle = (e) => {
    setFilter(e.target.value);
  };

  const filterFieldHandle = (e) => {
    setFilterField(e.target.value);
  };

  const toggleGenericFilter = () => {
    setIsGenericFilter(!isGenericFilter);
  };

  const filteredData = data ? data.filter(item => {
    if (isGenericFilter) {
      return Object.keys(item).some(key => item[key] && item[key].toString().includes(filter));
    }
    return item[filterField] && item[filterField].includes(filter);
  }) : [];

  const countBBC = data ? data.filter(item => item.afilhiado === 'bbc').length : 0;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Tabela:</h1>
      <FilterControls
        filter={filter}
        filterField={filterField}
        isGenericFilter={isGenericFilter}
        onFilterChange={filterHandle}
        onFilterFieldChange={filterFieldHandle}
        onToggleGenericFilter={toggleGenericFilter}
      />
      <AffiliateCount count={countBBC} />
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status"></div>
          <span className="ml-2">Carregando...</span>
        </div>
      ) : (
        <DataTable data={filteredData} />
      )}
    </div>
  );
};

export default Home;