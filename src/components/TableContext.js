import { createContext, useReducer } from "react";

import { tableReducer } from "./tableReducer";
import { initState } from "./tableReducer";

export const TableContext = createContext();

export default function TableContextProvider({ children }) {
  const [state, dispatch] = useReducer(tableReducer, initState);
  return (
    <TableContext.Provider value={{ state, dispatch }}>
      {children}
    </TableContext.Provider>
  );
}
