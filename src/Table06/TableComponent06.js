import React, { useState } from 'react';

export default function TableComponent06(props) {
  console.log('table');
  const [ordering, setOrdering] = useState(setInitialOrdering(props.headers));

  function renderHeader(header) {
    function changeOrdering() {
      setOrdering(
        Object.assign(Object.assign({}, ordering), {
          [header.path]: ((ordering[header.path] + 2) % 3) - 1,
        })
      );
    }
    return (
      <th
        key={header.path}
        style={{ fontWeight: header.comparator ? 'bold' : 'unset' }}
        onClick={changeOrdering}
      >
        {header.title}
        {header.path in ordering && ordering[header.path] == 1
          ? ' ASC'
          : ordering[header.path] == -1
          ? ' DESC'
          : ''}
      </th>
    );
  }
  function renderDataRow(dataRow) {
    function runCallback(callback) {
      return function () {
        callback(dataRow);
      };
    }
    function renderActionButton(rowAction) {
      return (
        <button
          key={dataRow.id + rowAction.title}
          onClick={runCallback(rowAction.callback)}
        >
          {rowAction.title}
        </button>
      );
    }
    function renderCell(header) {
      const cellContent = dataRow[header.path];
      return (
        <td key={dataRow.id + header.path}>
          {header.mutator ? header.mutator(cellContent) : cellContent}
        </td>
      );
    }
    return (
      <tr key={dataRow.id}>
        {props.headers.map(renderCell)}
        {props.rowActions ? (
          <td>{props.rowActions.map(renderActionButton)}</td>
        ) : null}
      </tr>
    );
  }

  function renderTable(data, headers) {
    return (
      <table border="1" style={{ width: '100%' }}>
        <thead>
          <tr>
            {headers.map(renderHeader)}
            {props.rowActions ? <th>Actions</th> : null}
          </tr>
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
    return (
      <div key={'group:' + groupingValue}>
        {renderTable(filteredRows, props.headers)}
      </div>
    );
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

  return (
    <>
      {renderTable(props.data, props.headers)}
      <div>{JSON.stringify(ordering)}</div>
    </>
  );
}

function setInitialOrdering(headers) {
  const ordering = {};
  for (let i = 0; i < headers.length; i++)
    if (headers[i].comparator) ordering[headers[i].path] = 0;
  return ordering;
}
