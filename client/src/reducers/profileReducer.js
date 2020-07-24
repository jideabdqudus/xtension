import { ADD_PROFILE } from "../actions/Types";

const initialState = {
  users: [
    {
      id: 1,
      name: "Abdul-Qudus Olajide",
      role: "Instructor or Teacher",
      location: "Lagos",
      skills: ["HTML", "CSS", "Gatsby"],
      bio:
        "Lorem Ipsum dolor sit amet - An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music,",
      twitter: "https://twitter.com/jideabdqudus",
      github: "https://github.com/jideabdqudus",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Developer",
      location: "Ibadan",
      skills: ["HTML", "PHP", "Wordpress"],
      bio:
        "Lorem Ipsum dolor sit amet - An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music,",
      twitter: "https://twitter.com/jideabdqudus2",
      github: "https://github.com/jideabdqudus2",
    },
    {
      id: 3,
      name: "Jane Doe",
      role: "Designer",
      location: "Kebbi",
      skills: ["Ruby", "CSS", "Bootstrap"],
      bio:
        "Lorem Ipsum dolor sit amet - An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music,",
      twitter: "https://twitter.com/jideabdqudus3",
      github: "https://github.com/jideabdqudus3",
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
