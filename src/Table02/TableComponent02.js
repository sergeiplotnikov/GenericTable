import React from 'react';

export default function TableComponent02(props) {
  function renderDataRow(dataRow) {
    function renderCell(header) {
      return <td key={dataRow.id + header.path}>{dataRow[header.path]}</td>;
    }
    return (
      <tr key={dataRow.id}>
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
  return <th key={header.path}>{header.title}</th>;
}
