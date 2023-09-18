import { useState, useEffect } from 'react';

import FiltersList from '../filters-list';
import Tabs from '../tabs';
import TicketsList from '../tickets-list';
import Header from '../header';
import TicketsButton from '../tickets-button';

import styles from './app.module.scss';

export default function App() {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine ? 'Online' : 'Offline');

  useEffect(() => {
    const handleStatusChange = () => {
      setOnlineStatus(navigator.onLine ? 'Online' : 'Offline');
    };

    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);

    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [onlineStatus]);

  const errorBlock = (
    <h2 className={styles.avia__disconnect}>There is no internet connection, please refresh the page.</h2>
  );

  if (onlineStatus === 'Offline') {
    return errorBlock;
  }

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
