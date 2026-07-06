import tarentoLogo from "../assets/images/tarento-logo.png";
import type { Company } from "../types/Company";
import officeBanner from "../assets/images/tarento-office.png";

export const company: Company = {
  name: "Tarento Technologies Pvt. Ltd.",

  tagline: "Co-Creating a Better Tomorrow",

  description:
    "Tarento is a global technology consulting company specializing in digital engineering, cloud transformation, AI, and enterprise solutions.",

  website: "https://www.tarento.com",

  linkedin: "https://www.linkedin.com/company/tarento",

  logo: tarentoLogo,
  bannerImage: officeBanner,
  location: {
    address: "11th Floor, BLOCK CRED, IBC KNOWLEDGE PARK, Tower C, Bannerghatta Rd",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",

    googleMapsUrl:
      "https://maps.google.com/?q=Tarento+Technologies+Bangalore",

    embedUrl:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.611954927341!2d77.60055637601023!3d12.932643787379163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1489cada2e41%3A0x641a0fa6114cc198!2sTarento%20Technologies%20Pvt%20Limited!5e0!3m2!1sen!2sin!4v1783327325844!5m2!1sen!2sin",
  }
};