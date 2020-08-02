import { EDIT_PROFILE } from "actions/Types";

const initialState = {
  id: 1,
  user: {
    name: "Abdul-Qudus Olajide",
    username: "jideabdqudus",
    role: "Instructor or Teacher",
    location: "Lagos",
    skills: ["HTML", "CSS", "Gatsby", "Node"],
    bio:
      "Lorem Ipsum dolor sit amet - An artist of considerable range, Ryan — the name taken by Melbourne-raised, ",
    twitter: "https://twitter.com/jideabdqudus",
    github: "https://github.com/jideabdqudus",
  },
  experience: [
    {
      company: "Paysmosmo",
      position: "Developer",
      location: "Lagos",
      start: "2019-12-10",
      end: "now",
      description: "eCommerce",
    },
    {
      company: "TechEnd",
      position: "Designer",
      location: "Lagos",
      start: "2017-02-10",
      end: "2019-10-10",
      description: "Tech",
    },
  ],
  education: [
    {
      school: "University of Lagos",
      degree: "Bsc",
      start: "2015-02-10",
      end: "2018-10-10",
      field: "Mathematics",
    },
  ],
  isAuthenticated: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
