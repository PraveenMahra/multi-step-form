/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  selectedBilling: "monthly",
  selectedPlanIndex: 0,
  selectedAddOns: [],
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_SELECTED_BILLING":
      return { ...state, selectedBilling: action.payload };
    case "SET_SELECTED_PLAN_INDEX":
      return { ...state, selectedPlanIndex: action.payload };
    case "SET_SELECTED_ADDONS":
      return { ...state, selectedAddOns: action.payload };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
