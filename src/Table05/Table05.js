import React from 'react';
import { TableComponent05, headers05_01 } from './';
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
        <li>create your own &lt;TableComponent_05 /&gt; that will render the same UI</li>
        <li>Try not looking at the content of TableComponent05.js</li>
        <li>Use header arrays from headers03.js AND any other code in that file.</li>
      </ul>
      <hr />
      <TableComponent05
        data={tableData}
        headers={headers05_01}
        rowActions={rowActions05}
      />
    </>
  );
}
