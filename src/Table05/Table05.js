import React from 'react';
import { TableComponent05, headers05_01, headers05_02 } from './';
import tableData from '../tableData';
import { rowActions05 } from './';

export default function Table05() {
  return (
    <>
      <TableComponent05
        data={tableData}
        headers={headers05_01}
      />
      <hr />
      <ul>
        <li></li>
      </ul>
      <hr />
      <TableComponent05
        data={tableData}
        headers={headers05_02}
        rowActions={rowActions05}
      />
    </>
  );
}
