import styles from './Header.module.scss';
import {Link} from "react-router-dom";
import Menu from "./components/Menu/Menu.tsx";

const menuItems = {
  horoscopes: '',
  daily: 'daily/',
  tarot: 'tarot/',
  articles: 'articles/',
  contact: 'contact/',
};

const Header = () => {


  return (
      <header className={styles.header}>
        <Link to="/">
          <img
              className={styles.logo}
              src="/src/assets/logo.png"
              alt="logo"
          />
        </Link>

        <Menu menuItems={menuItems}/>
      </header>
  )
}

export default Header;
