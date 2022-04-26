import React from 'react';
import { TableComponent02, headers02_01, headers02_02, headers02_03 } from './';
import tableData from '../tableData';

export default function Table02() {
  return (
    <>
      <TableComponent02
        data={tableData}
        headers={headers02_01}
      />
      <hr />
      <ul>
        <li>
          create your own &lt;TableComponent_02 /&gt; that will render the same UI if provided with the same props as &lt;TableComponent02 /&gt; above 
        </li>
        <li>Try not looking at the content of TableComponent02.js</li>
      </ul>
      <hr />
      <TableComponent02
        data={tableData}
        headers={headers02_02}
      />
      <hr />
      <ul>
        <li>
          Now the order of table columns is decided by the order of object in the array provided to 'headers' prop. 
        </li>
      </ul>
      <hr />
      <TableComponent02
        data={tableData}
        headers={headers02_03}
      />
    </>
  );
}
