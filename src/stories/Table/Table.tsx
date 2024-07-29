import * as React from "react";

interface TableProps {
  tableHead: string;
}

function Table({ tableHead }: React.FC<TableProps>) {
  return (
    <table className="rounded-sm bg-purple-500">
      <thead>
        <tr>
          <th>Something</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Over here</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
