import React from 'react';

export { headers05_01, headers05_02, rowActions05 };

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
const headers05_01 = [
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
  },
  {
    title: 'Some Date',
    path: 'someDate',
    mutator: prettyDate,
  },
  {
    title: 'Status',
    path: 'status',
    mutator: prettyStatus,
  },
];

const headers05_02 = [
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
  },
  {
    title: 'Some Date',
    path: 'someDate',
    mutator: prettyDate,
  },
  {
    title: 'Status',
    path: 'status',
    mutator: prettyStatus,
  },
];

const rowActions05 = [
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