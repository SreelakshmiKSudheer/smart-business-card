import { Employee } from "../types/Employee";

export const employee: Employee = {
  id: "EMP001",

  firstName: "Alex",

  lastName: "Stratos",

  designation: "Senior Solutions Architect",

  businessUnit: "Cloud Consulting",

  profileImage: "/images/profile.png",

  about:
    "Helping enterprises build scalable cloud solutions and digital transformation initiatives.",

  experience: 12,

  contact: {
    email: "alex@tarento.com",

    phone: "+91 9876543210",

    linkedin: "https://linkedin.com/in/alexstratos"
  },

  expertise: [
    {
      id: "1",
      name: "Cloud"
    },
    {
      id: "2",
      name: "AWS"
    },
    {
      id: "3",
      name: "Microservices"
    },
    {
      id: "4",
      name: "AI"
    }
  ]
};