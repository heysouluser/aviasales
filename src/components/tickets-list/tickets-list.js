import styles from './tickets-list.module.scss';
import Ticket from '../ticket';

export default function TicketsList() {

  return (
    <div className={styles['avia__tickets-box']}>
      <Ticket />
    </div>
  );
}