import styles from './app.module.scss';

import TicketFilter from '../ticket-filter';
import Tabs from '../tabs';
import TicketsList from '../tickets-list';
import Header from '../header';

export default function App() {
  return (
    <div className={styles.avia}>
      <div className={styles.avia__wrapper}>
        <Header />
        <main className={styles.avia__main}>
          <TicketFilter />
          <div className={styles.avia__table}>
            <Tabs />
            <TicketsList />
          </div>
        </main>
      </div>
    </div>
  );
}



