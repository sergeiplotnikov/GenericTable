import React from 'react';
import { TableComponent01 } from './';
import tableData from '../tableData';

export default function Table01() {
  return (
    <>
      <TableComponent01 data={tableData} />
      <hr />
      <ul>
        <li>
          create your own &lt;TableComponent_01 /&gt; that provided the same props as &lt;TableComponent01 /&gt; above will render the same UI
        </li>
        <li>This is very similar to table in &lt;CC10 /&gt;</li>
        <li>Try not looking at the content of TableComponent01.js</li>
      </ul>
    </>
  );
}
