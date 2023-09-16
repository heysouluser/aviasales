import logo from '../../images/Logo.svg';

import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.avia__header}>
      <img src={logo} alt="logo" />
    </header>
  );
}
