import React from 'react';
import { TableComponent04, headers04_01, headers04_02 } from './';
import tableData from '../tableData';

export default function Table04() {
  return (
    <>
      <TableComponent04
        data={tableData}
        headers={headers04_01}
      />
      <hr />
      <ul>
        <li></li>
        <li>
          create your own &lt;TableComponent_04 /&gt; that will render the same UI
        </li>
        <li>Try not looking at the content of TableComponent04.js</li>
        <li>Use header arrays from headers04.js AND any other code in that file.</li>
        <li>data provided to 'data' prop does not change between tables, but rendered UI is</li>
      </ul>
      <hr />
      <ul>
        <li>
          Notice that bottom table is data rendered into multiple tables according to unique values ('available', 'away', 'busy') of the field passed to 'groupBy' prop ('status').
        </li>
      </ul>
      <hr />
      <TableComponent04
        data={tableData}
        headers={headers04_02}
        groupBy='status'
      />
    </>
  );
}
