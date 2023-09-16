import { useDispatch, useSelector } from 'react-redux';

import styles from './tabs.module.scss';

import { applySort } from '../../store/aviaSlice';

export default function Tabs() {
  const buttons = useSelector(state => state.avia.buttons);
  const dispatch = useDispatch();

  return (
    <div className={styles.avia__tabs}>
      {buttons.map(button => (
        <button
          type='button'
          key={button.id}
          className={button.active ? `${styles.avia__button} ${styles.active}` : styles.avia__button}
          onClick={() => dispatch(applySort({ id: button.id }))}
        >
          {button.value.toUpperCase()}
        </button>
      ))}
    </div>
  );
}