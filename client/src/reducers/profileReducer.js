const { ADD_PROFILE } = require("actions/Types");

import { ADD_PROFILE } from "../actions/Types";

const initialState = {
  users: [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Jane Doe",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
