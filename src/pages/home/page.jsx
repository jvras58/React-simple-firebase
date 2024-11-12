import React, { useState } from 'react';
import useFetchData from '../../hooks/useFetchData';

const Home = () => {
  const { data, loading } = useFetchData('cadrastro');
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredData = data.filter(item => item.afilhiado.includes(filter));

  const countBBC = data.filter(item => item.afilhiado === 'bbc').length;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Tabela:</h1>
      <div className="mb-4">
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Filtrar pelo Campo"
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4 p-4 bg-white-300 border border-blue-200 rounded">
        <h2 className="text-xl font-semibold">Quantidade de Afilhiados: {countBBC}</h2>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status"></div>
          <span className="ml-2">Carregando...</span>
        </div>
      ) : (
        <table className="min-w-full bg-white-300 border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-left">Nome</th>
              <th className="py-2 px-4 border-b text-left">CPF</th>
              <th className="py-2 px-4 border-b text-left">Afilhiado</th>
              <th className="py-2 px-4 border-b text-left">Testing</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(item => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b text-left">{item?.id}</td>
                <td className="py-2 px-4 border-b text-left">{item?.nome}</td>
                <td className="py-2 px-4 border-b text-left">{item?.cpf}</td>
                <td className="py-2 px-4 border-b text-left">{item?.afilhiado}</td>
                <td className='py-2 px-4 border-b text-left'>{item?.testing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;