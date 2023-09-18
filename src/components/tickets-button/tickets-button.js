import { useDispatch, useSelector } from 'react-redux';

import { showTickets } from '../../store/aviaSlice';

import styles from './tickets-button.module.scss';

export default function TicketsButton() {
  const dispatch = useDispatch();
  const { tickets, filters } = useSelector((state) => state.avia);

  const anyChecked = filters.some((filter) => filter.checked);

  if (tickets.length > 5 && anyChecked) {
    return (
      <button
        type="button"
        aria-label="show-tickets"
        className={styles.avia__button}
        onClick={() => dispatch(showTickets())}
      >
        Показать еще 5 билетов
      </button>
    );
  }

  return null;
}
