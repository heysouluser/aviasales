import styles from './header.module.scss';
import logo from '../../images/Logo.svg';

export default function Header() {

  return (
    <header className={styles.avia__header}>
      <img src={logo} alt="logo" />
    </header>
  );
}