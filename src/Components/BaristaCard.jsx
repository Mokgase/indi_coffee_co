import styles from '../Style/baristacard.module.css';


export default function BaristaCard({ name }) {
  return (
    <div>
      <div className={styles.profile_card} />
        <p className="font-medium">{name}</p>
    </div>
  );
}
