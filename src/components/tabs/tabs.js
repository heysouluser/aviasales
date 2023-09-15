import styles from './tabs.module.scss'

export default function Tabs() {

  return (
    <div className={styles.avia__tabs}>
      <button type='button' className={styles.avia__button}>Самый дешевый</button>
      <button type='button' className={styles.avia__button}>Самый быстрый</button>
    </div>
  );
}