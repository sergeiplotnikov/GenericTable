import React from 'react';

export { headers06_01, rowActions06 };

function prettyDate(dataIsoString) {
  return new Date(dataIsoString).toDateString();
}

function prettyStatus(status) {
  switch (status) {
    case 'available':
      return (
        <div style={{ backgroundColor: 'green', color: 'white' }}>
          AVAILABLE
        </div>
      );
    case 'away':
      return <div style={{ backgroundColor: 'yellow' }}>Away</div>;
    case 'busy':
      return <div style={{ backgroundColor: 'red', color: 'white' }}>BUSY</div>;
  }
}

function numberComparator(a, b) {
  return a > b;
}

function dateComparator(a, b) {
  return (new Date(a)).getTime() > (new Date(b)).getTime();
}

const headers06_01 = [
  {
    title: 'ID',
    path: 'id',
  },
  {
    title: 'Some String',
    path: 'someString',
  },
  {
    title: 'Some number',
    path: 'someNumber',
    comparator: numberComparator,
  },
  {
    title: 'Some Date',
    path: 'someDate',
    mutator: prettyDate,
    comparator: dateComparator,
  },
  {
    title: 'Status',
    path: 'status',
    mutator: prettyStatus,
  },
];

const rowActions06 = [
  {
    title: 'get String',
    callback: getString,
  },
  {
    title: 'get Status',
    callback: getStatus,
  },
];

function getString (dataRow) {
  alert('Some String: ' + dataRow.someString);
}
function getStatus (dataRow) {
  alert('Status: ' + dataRow.status);
}