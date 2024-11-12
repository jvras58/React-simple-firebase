import React from 'react';
import TableRow from './TableRow';

const DataTable = ({ data }) => (
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
    {data.map(item => (
    <TableRow key={item.id} item={item} />
    ))}
</tbody>
</table>
);

export default DataTable;