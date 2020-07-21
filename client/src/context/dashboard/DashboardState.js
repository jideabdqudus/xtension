import React, { useReducer } from "react";
import DashboardContext from "./DashboardContext";
import DashboardReducer from "./DashboardReducer";

import { ADD_PROFILE } from "../Types";

const DashboardState = (props) => {
  const initialState = {
    profile: {
      id: 1,
    },
  };

  const [state, dispatch] = useReducer(DashboardReducer, initialState);

  //Add Profile

  return (
    <DashboardContext.Provider
      value={{
        profile: state.profile,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardState;
