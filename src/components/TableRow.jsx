import React from 'react';

const TableRow = ({ item }) => (
<tr key={item.id}>
    <td className="py-2 px-4 border-b text-left">{item?.id}</td>
    <td className="py-2 px-4 border-b text-left">{item?.nome}</td>
    <td className="py-2 px-4 border-b text-left">{item?.cpf}</td>
    <td className="py-2 px-4 border-b text-left">{item?.afiliado}</td>
    <td className='py-2 px-4 border-b text-left'>{item?.testing}</td>
</tr>
);

export default TableRow;