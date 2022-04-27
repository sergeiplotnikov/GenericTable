import React from 'react';
import { TableComponent06, headers06_01 } from './';
import tableData02 from '../tableData02';
import { rowActions06 } from './';

export default function Table06() {
  return (
    <>
      <TableComponent06
        data={tableData02}
        headers={headers06_01}
      />
      <hr />
      <ul>
        <li><h1>IN DEVELOPMENT</h1></li>
        <li>create your own &lt;TableComponent_05 /&gt; that will render the same UI</li>
        <li>Try not looking at the content of TableComponent05.js</li>
        <li>Use header arrays from headers03.js AND any other code in that file.</li>
      </ul>
      <hr />
      <TableComponent06
        data={tableData02}
        headers={headers06_01}
        rowActions={rowActions06}
      />
    </>
  );
}
