import React from 'react';

export default function TableComponent04(props) {
  function renderDataRow(dataRow) {
    function renderCell(header) {
      const cellContent = dataRow[header.path];
      return (
        <td key={dataRow.id + header.path}>{header.mutator ? header.mutator(cellContent) : cellContent}</td>
      );
    }
    return <tr key={dataRow.id}>{props.headers.map(renderCell)}</tr>;
  }

  function renderTable(data, headers) {
    return (
      <table border="1" style={{ width: '100%' }}>
        <thead>
          <tr>{headers.map(renderHeader)}</tr>
        </thead>
        <tbody>{data.map(renderDataRow)}</tbody>
      </table>
    );
  }

  function renderGroup(groupingValue) {
    const filteredRows = [];
    for (let i = 0; i < props.data.length; i++) {
      if (props.data[i][props.groupBy] == groupingValue)
        filteredRows.push(props.data[i]);
    }
    return <div key={'group:' + groupingValue}>{renderTable(filteredRows, props.headers)}</div>;
  }

  function getUniqueGroupingValues(groupBy, data) {
    const uniqueValues = [];
    for (let i = 0; i < data.length; i++) {
      const value = data[i][groupBy];
      if (!uniqueValues.includes(value)) uniqueValues.push(value);
    }
    return uniqueValues;
  }

  if (props.groupBy) {
    return (
      <>{getUniqueGroupingValues(props.groupBy, props.data).map(renderGroup)}</>
    );
  }

  return renderTable(props.data, props.headers);
}

function renderHeader(header) {
  return <th key={header.path}>{header.title}</th>;
}
