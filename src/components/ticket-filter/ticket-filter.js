import styles from './ticket-filter.module.scss';

export default function TicketFilter() {

  return (
    <div className={`${styles.avia__filter} ${styles.filter}`}>
      <h3 className={styles.filter__header}>Количество пересадок</h3>
      <label className={styles.filter__label}>
        <input type='checkbox' className={styles.filter__checkbox} />
        <span className={styles['filter__custom-checkbox']} />
        <span className={styles.filter__text}>Все</span>
      </label>
      <label className={styles.filter__label}>
        <input type='checkbox' className={styles.filter__checkbox} />
        <span className={styles['filter__custom-checkbox']} />
        <span className={styles.filter__text}>Все</span>
      </label>
      <label className={styles.filter__label}>
        <input type='checkbox' className={styles.filter__checkbox} />
        <span className={styles['filter__custom-checkbox']} />
        <span className={styles.filter__text}>Все</span>
      </label>
      <label className={styles.filter__label}>
        <input type='checkbox' className={styles.filter__checkbox} />
        <span className={styles['filter__custom-checkbox']} />
        <span className={styles.filter__text}>Все</span>
      </label>
      <label className={styles.filter__label}>
        <input type='checkbox' className={styles.filter__checkbox} />
        <span className={styles['filter__custom-checkbox']} />
        <span className={styles.filter__text}>Все</span>
      </label>
    </div>
  );
}