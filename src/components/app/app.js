import FiltersList from '../filters-list';
import Tabs from '../tabs';
import TicketsList from '../tickets-list';
import Header from '../header';
import TicketsButton from '../tickets-button';

import styles from './app.module.scss';

export default function App() {
  return (
    <div className={styles.avia}>
      <div className={styles.avia__wrapper}>
        <Header />
        <main className={styles.avia__main}>
          <FiltersList />
          <div className={styles.avia__table}>
            <Tabs />
            <TicketsList />
            <TicketsButton />
          </div>
        </main>
      </div>
    </div>
  );
}
