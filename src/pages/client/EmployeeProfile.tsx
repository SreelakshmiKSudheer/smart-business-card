
import EmployeeCard from '../../components/organisms/EmployeeCard';
import styles from './EmployeeProfile.module.css';

export default function EmployeeProfile() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <EmployeeCard />
      </div>
    </main>
  );
}