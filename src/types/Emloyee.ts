export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  designation: string;
  businessUnit: string;

  profileImage: string;

  about: string;

  experience: number;

  contact: Contact;

  expertise: Skill[];
}