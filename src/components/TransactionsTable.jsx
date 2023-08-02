import React, { useState, useMemo, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import MOCK_DATA from "../data/MOCK_DATA_726.json";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export const TransactionsTable = () => {
  const gridRef = useRef();
  const [rowData] = useState(MOCK_DATA);
  const [columnDefs] = useState([
    { field: "date" },
    { field: "amount" },
    { field: "merchant_name" },
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
    <div
      id="transactions"
      className="ag-theme-alpine"
      style={{ height: 600, width: 800 }}
    >
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      ></AgGridReact>
    </div>
  );
};
