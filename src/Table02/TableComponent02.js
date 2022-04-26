import React from 'react';

export default function TableComponent02(props) {
  function renderDataRow(dataRow) {
    function renderCell(header) {
      return <td>{dataRow[header.path]}</td>;
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
