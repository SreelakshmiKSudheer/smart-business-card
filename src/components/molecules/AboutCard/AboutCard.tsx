import styles from "./AboutCard.module.css";

interface AboutCardProps {
  about: string;
}

export default function AboutCard({
  about,
}: AboutCardProps) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{about}</p>
    </div>
  );
}