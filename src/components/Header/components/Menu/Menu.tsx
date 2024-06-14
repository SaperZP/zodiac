import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import styles from "./Menu.module.scss";
import {AiOutlineMenu} from "react-icons/ai";

interface menuItemData {
  menuItems: { [key: string]: string };
}

const Menu: React.FC<menuItemData> = ({menuItems}) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [isOpen, setIsOpen] = useState(false);
  const menuToggleHandler = () => setIsOpen(!isOpen);


  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <div className={styles.menu}>
        {!isDesktop && (
            <button onClick={menuToggleHandler} className={styles.menu__button}>
              <AiOutlineMenu className={`
              ${styles.menu__button__icon} 
              ${isOpen && styles.menu__button__icon_open}
              `}/>
            </button>
        )}

        {(isDesktop || isOpen) && (
            <ul className={`${styles.menu__list} ${isDesktop && styles.menu__list_desktop}`}>
              {Object.keys(menuItems).map((key) => (
                  <li key={key}>
                    <NavLink
                        to={`/${menuItems[key]}`}
                        className={({isActive}) => (`
                    ${styles.menu__item} 
                    ${isDesktop && styles.menu__item_desktop} 
                    ${isActive && styles.menu__item_active}
                    `)}
                    >
                      {key}
                    </NavLink>
                  </li>
              ))}
            </ul>
        )}
      </div>
  )
}

export default Menu;
