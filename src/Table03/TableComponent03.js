import React from 'react';

export default function TableComponent03(props) {
  function renderDataRow(dataRow) {
    function renderCell(header) {
      const cellContent = dataRow[header.path];
      return (
        <td key={dataRow.id + header.path}>
          {header.mutator ? header.mutator(cellContent) : cellContent}
        </td>
      );
    }
    return <tr key={dataRow.id}>{props.headers.map(renderCell)}</tr>;
  }

  return (
    <table border="1" style={{ width: '100%' }}>
      <thead><tr>{props.headers.map(renderHeader)}</tr></thead>
      <tbody>{props.data.map(renderDataRow)}</tbody>
    </table>
  );
}

function renderHeader(header) {
  return <th key={header.path}>{header.title}</th>;
}
