import styles from './NavBar.module.scss'

export default function NavBar() { 
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Meet the coach</a>
        </li>
        <li>
          <a href="">Client results</a>
        </li>
        <li>
          <a href="">FAQs</a>
        </li>
      </ul>
    </nav>
  );
}