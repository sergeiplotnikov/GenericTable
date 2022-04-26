import React from 'react';

export { headers03_01, headers03_02, headers03_03 };

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
const headers03_01 = [
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

const headers03_02 = [
  {
    title: 'Some Date',
    path: 'someDate',
    mutator: prettyDate,
  },
  {
    title: 'Some String',
    path: 'someString',
  },
  {
    title: 'ID',
    path: 'id',
  },
  {
    title: 'Some number',
    path: 'someNumber',
  },
  {
    title: 'Status',
    path: 'status',
  },
];

const headers03_03 = [
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
