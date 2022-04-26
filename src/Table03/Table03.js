import React from 'react';
import { TableComponent03, headers03_01, headers03_02, headers03_03 } from './';
import tableData from '../tableData';

export default function Table03() {
  return (
    <>
      <TableComponent03
        data={tableData}
        headers={headers03_01}
      />
      <hr />
      <ul>
        <li>
          create your own &lt;TableComponent_03 /&gt; that will render the same UI
        </li>
        <li>Try not looking at the content of TableComponent03.js</li>
        <li>Use header arrays from headers03.js AND any other code in that file.</li>
        <li>data provided to 'data' prop does not change between tables, but rendered UI is</li>
      </ul>
      <hr />
      <TableComponent03
        data={tableData}
        headers={headers03_02}
      />
      <hr />
      <ul>
        <li>
          Notice that "Some Date" in the middle talbe is rendered differently than the actual data. 
        </li>
      </ul>
      <hr />
      <TableComponent03
        data={tableData}
        headers={headers03_03}
      />
    </>
  );
}
