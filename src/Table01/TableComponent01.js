import React from 'react';

export default function TableComponent01(props) {
  return (
    <table border="1" style={{width: '100%'}}>
      <thead>
        <th>ID</th>
        <th>Some String</th>
        <th>Some Number</th>
        <th>Some Date</th>
        <th>Status</th>
      </thead>
      <tbody>
        {
          props.data.map(renderDataRow)
        }
      </tbody>
    </table>
  );
}

function renderDataRow(dataRow) {
  return (
    <tr>
      <td>{dataRow.id}</td>
      <td>{dataRow.someString}</td>
      <td>{dataRow.someNumber}</td>
      <td>{dataRow.someDate}</td>
      <td>{dataRow.status}</td>
    </tr>
  )
}