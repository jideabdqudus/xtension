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
      experience: [
        {
          company: "VGG",
          position: "Business Analyst",
          location: "Lagos",
          start: "2019-12-10",
          end: "now",
          description: "Tech",
        },
        {
          company: "Oando",
          position: "Attendant",
          location: "Lagos",
          start: "2017-02-10",
          end: "2019-10-10",
          description: "Petroleum Company",
        },
      ],
      education: [
        {
          school: "University of Ibadan",
          degree: "Bsc",
          start: "2015-02-10",
          end: "2018-10-10",
          field: "Business Adminisitration",
        },
      ],
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
      experience: [
        {
          company: "Fundall",
          position: "CEO",
          location: "Lagos",
          start: "2019-12-10",
          end: "now",
          description: "eCommerce",
        },
        {
          company: "Softcom",
          position: "Designer",
          location: "Lagos",
          start: "2017-02-10",
          end: "2019-10-10",
          description: "Tech",
        },
      ],
      education: [
        {
          school: "University of Kebbi",
          degree: "Bsc",
          start: "2015-02-10",
          end: "2018-10-10",
          field: "Engineering",
        },
      ],
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
