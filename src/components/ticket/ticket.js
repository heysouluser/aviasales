import uniqid from 'uniqid';
import { format } from 'date-fns';

import styles from './ticket.module.scss';

export default function Ticket({ ticket }) {
  const { price, carrier, segments } = ticket;

  function correctDuration(duration) {
    const hour = (duration / 60).toFixed(0);
    const min = duration % 60;
    return `${hour}ч ${min}м`;
  }

  function calculateStops(count) {
    if (count === 1) {
      return 'пересадка';
    }
    if (count >= 2 && count <= 4) {
      return 'пересадки';
    }
    return count === '';
  }
  return (
    <div className={`${styles.avia__ticket} ${styles.ticket}`}>
      <div className={styles.ticket__header}>
        <div className={styles.ticket__price}>{price.toLocaleString()} р</div>
        <div className={styles.ticket__company}>
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="avia-company logo" />
        </div>
      </div>
      <div className={styles.ticket__body}>
        {segments.map((segment) => (
          <div key={uniqid()} className={styles.ticket__row}>
            <div className={styles.ticket__column}>
              <div className={styles.ticket__title}>
                {segment.origin} - {segment.destination}
              </div>
              <div className={styles.ticket__subtitle}>
                {`${format(Date.parse(segment.date), 'HH:mm')} - ${format(
                  new Date(Date.parse(segment.date) + segment.duration * 60000),
                  'HH:mm'
                )}`}
              </div>
            </div>
            <div className={styles.ticket__column}>
              <div className={styles.ticket__title}>В пути</div>
              <div className={styles.ticket__subtitle} style={{ textTransform: 'none' }}>
                {correctDuration(segment.duration)}
              </div>
            </div>
            <div className={styles.ticket__column}>
              <div className={styles.ticket__title}>
                {segment.stops.length === 0
                  ? 'Без пересадок'
                  : `${segment.stops.length} ${calculateStops(segment.stops.length)}`}
              </div>
              <div className={styles.ticket__subtitle}>{` ${segment.stops}`}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
