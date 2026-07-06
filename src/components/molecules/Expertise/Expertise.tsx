import Chip from "../../atoms/chip";

interface ExpertiseProps {
  skills: string[];
}

const Expertise = ({ skills }: ExpertiseProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <Chip
          key={skill}
          label={skill}
        />
      ))}
    </div>
  );
};

export default Expertise;