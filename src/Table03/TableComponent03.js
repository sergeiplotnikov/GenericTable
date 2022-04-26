import React from 'react';

export default function TableComponent03(props) {
  function renderDataRow(dataRow) {
    function renderCell(header) {
      const cellContent = dataRow[header.path];
      return <td>{ header.mutator ? header.mutator(cellContent) : cellContent}</td>;
    }
    return (
      <tr>
        {
          props.headers.map(renderCell)
        }
      </tr>
    );
  }

  return (
    <table border="1" style={{ width: '100%' }}>
      <thead>{props.headers.map(renderHeader)}</thead>
      <tbody>{props.data.map(renderDataRow)}</tbody>
    </table>
  );
}

function renderHeader(header) {
  return <th>{header.title}</th>;
}
