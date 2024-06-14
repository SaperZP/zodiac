import styles from './Layout.module.scss';
import Header from "../../components/Header/Header.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
  return (
      <div className={styles.container}>
        <Header/>

        <main className={styles.container__main}>
          <Outlet/>
        </main>

        <footer className={styles.container__footer}>
          <p>Zodiac corp. 2024</p>
        </footer>
      </div>
  )
};

export default Layout;
