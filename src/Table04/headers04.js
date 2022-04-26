import React from 'react';

export { headers04_01, headers04_02, headers04_03 };

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
const headers04_01 = [
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
  },
  {
    title: 'Status',
    path: 'status',
  },
];

const headers04_02 = [
  {
    title: 'Some String',
    path: 'someString',
  },
  {
    title: 'Status',
    path: 'status',
    mutator: prettyStatus,
  },
];
