import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Alert, Spin } from 'antd';

import { fetchTickets } from '../../store/aviaSlice';
import Ticket from '../ticket';

import styles from './tickets-list.module.scss';

export default function TicketsList() {
  const dispatch = useDispatch();
  const { filters, tickets, count, status, stop } = useSelector((state) => state.avia);

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch, stop]);

  const filterTickets = () => {
    const checkedBoxes = filters.filter((box) => box.checked);

    if (!tickets) {
      return [];
    }
    const listTransfers = checkedBoxes.map((box) => box.transfers);
    return tickets.filter((ticket) => ticket.segments.every((seg) => listTransfers.includes(seg.stops.length)));
  };

  const portionOfTickets = filterTickets().slice(0, count);

  const alert = (
    <Alert
      message="Внимание!"
      description="Нет подходящих рейсов по заданным параметрам"
      type="warning"
      showIcon
      closable
    />
  );

  const spin = status && <Spin />;

  return (
    <>
      {portionOfTickets.length ? spin : null}
      <div className={styles['avia__tickets-box']}>
        {!portionOfTickets.length && !status
          ? alert
          : portionOfTickets.map((ticket) => <Ticket key={ticket.id} ticket={ticket} />)}
      </div>
    </>
  );
}
