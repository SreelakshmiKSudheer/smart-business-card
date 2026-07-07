import Avatar from "../../atoms/avatar";
import styles from "./EmployeeInfo.module.css";

interface EmployeeInfoProps {
  image: string;
  name: string;
  designation: string;
}

export default function EmployeeInfo({
  image,
  name,
  designation,
}: EmployeeInfoProps) {
  return (
    <div className={styles.container}>
      <Avatar src={image} alt={name} size="8rem" />

      <h1 className={styles.name}>{name}</h1>

      <h3 className={styles.designation}>{designation}</h3>
    </div>
  );
}