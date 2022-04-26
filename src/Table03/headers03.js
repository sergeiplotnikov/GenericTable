export { headers03_01, headers03_02, headers03_03 };

function prettyDate(dataIsoString) {
  return new Date(dataIsoString).toDateString();
}

function prettyStatus(status) {
  switch (status) {
    case 'available':
      return '🟩';
    case 'away':
      return '🟨';
    case 'busy':
      return '🟥';
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
