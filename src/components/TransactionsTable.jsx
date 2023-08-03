import React, { useState, useMemo, useRef } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import PropTypes from "prop-types";

TransactionsTable.propTypes = {
  transactions: PropTypes.array,
};

export default function TransactionsTable({ transactions }) {
  const gridRef = useRef();
  const [rowData] = useState(transactions);
  const [columnDefs] = useState([
    { field: "date" },
    { field: "amount" },
    { field: "merchant" },
    { field: "category" },
  ]);

  const defaultColDef = useMemo(
    () => ({
      flex: 1,
      filter: true,
      filterParams: {
        debounce: 0,
        buttons: ["reset"],
      },
    }),
    []
  );

  return (
    <div id="transactions" className="ag-theme-alpine">
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      ></AgGridReact>
    </div>
  );
}
