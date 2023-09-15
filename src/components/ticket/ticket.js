import styles from './ticket.module.scss';

export default function Ticket() {

  return (
    <>
      <div className={`${styles.avia__ticket} ${styles.ticket}`}>
        <div className={styles.ticket__header}>
          <div className={styles.ticket__price}>13 400 р</div>
          <div className={styles.ticket__company}>здесь лейбл</div>
        </div>
        <div className={styles.ticket__body}>
          <div className={styles.ticket__row}>
            <div className={styles.ticket__column}>
              <div className={styles.ticket__title}>MOW – HKT</div>
              <div className={styles.ticket__subtitle}>10:45 – 08:00</div>
            </div>
            <div className={styles.ticket__column}>
              <div className={styles.ticket__title}>В пути</div>
              <div className={styles.ticket__subtitle}>21ч 15м</div>
            </div>
            <div className={styles.ticket__column}>
              <div className={styles.ticket__title}>2 пересадки</div>
              <div className={styles.ticket__subtitle}>HKG, JNB</div>
            </div>
          </div>
          <div className={styles.ticket__row}>
            <div className={styles.ticket__column}>
              <div className={styles.ticket__title}>MOW – HKT</div>
              <div className={styles.ticket__subtitle}>10:45 – 08:00</div>
            </div>
            <div className={styles.ticket__column}>
              <div className={styles.ticket__title}>В пути</div>
              <div className={styles.ticket__subtitle}>21ч 15м</div>
            </div>
            <div className={styles.ticket__column}>
              <div className={styles.ticket__title}>2 пересадки</div>
              <div className={styles.ticket__subtitle}>HKG, JNB</div>
            </div>
          </div>
        </div>
      </div>

    </>

  );
}