import Ticket from '../ticket';

import styles from './tickets-list.module.scss';

export default function TicketsList() {
  return (
    <div className={styles['avia__tickets-box']}>
      <Ticket />
    </div>
  );
}
