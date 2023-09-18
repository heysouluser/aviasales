import { useDispatch } from 'react-redux';

import { toggleCheckbox } from '../../store/aviaSlice';

import styles from './filter.module.scss';

export default function Filter({ filter, id }) {
  const dispatch = useDispatch();

  return (
    <label key={id} className={styles.filter__label}>
      <input
        type="checkbox"
        className={styles.filter__checkbox}
        checked={filter.checked}
        onChange={() => dispatch(toggleCheckbox({ id }))}
      />
      <span className={styles['filter__custom-checkbox']} />
      <span className={styles.filter__text}>{filter.value}</span>
    </label>
  );
}
