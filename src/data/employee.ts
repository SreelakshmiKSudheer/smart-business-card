import profileImage from "../assets/images/profile.png";

import type { Employee } from "../types/Employee";

export const employee: Employee = {
  id: "EMP001",

  firstName: "Alex",

  lastName: "Stratos",

  designation: "Senior Solutions Architect",

  department: "Cloud Consulting",

  experience: 12,

  about:
    "Helping enterprises build scalable cloud solutions and digital transformation initiatives through cloud-native architecture, AI integration, and enterprise modernization.",

  email: "alex.stratos@tarento.com",

  phone: "+91 9876543210",

  linkedin: "https://linkedin.com/in/alexstratos",

  profileImage,

  expertise: [
    "Cloud",
    "AWS",
    "Azure",
    "React",
    "Node.js",
    "Docker",
    "Kubernetes",
    "Microservices",
  ],
};