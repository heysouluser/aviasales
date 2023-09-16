import { useSelector } from 'react-redux';

import styles from './filters-list.module.scss';

import Filter from '../filter';

export default function FiltersList() {
  const filters = useSelector((state) => state.avia.filters); // глобальный стейт, который store

  return (
    <div className={`${styles.avia__filter} ${styles.filter}`}>
      <h3 className={styles.filter__header}>Количество пересадок</h3>
      {filters.map((filter) => <Filter key={filter.id} filter={filter} id={filter.id} />)}
    </div>
  );
}