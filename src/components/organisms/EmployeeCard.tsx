import EmployeeInfo from "../molecules/EmployeeInfo";
import AboutCard from "../molecules/AboutCard";

import profileImage from "../../assets/images/profile.jpg";

export default function EmployeeCard() {
  return (
    <>
      <EmployeeInfo
        image={profileImage}
        name="Alex Stratos"
        designation="Senior Solutions Architect"
      />

      <AboutCard
        about="Helping enterprises build scalable cloud solutions and digital transformation initiatives."
      />
    </>
  );
}