import { ADD_PROFILE } from "../actions/Types";

const initialState = {
  users: [
    {
      id: 1,
      name: "Abdul-Qudus Olajide",
      role: "Instructor or Teacher",
      location: "Lagos",
      skills: ["HTML", "CSS", "Bootstrap"],
      bio:
        "Lorem Ipsum dolor sit amet - An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music,",
        
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
