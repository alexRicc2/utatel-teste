import { graphql, Link, useStaticQuery } from "gatsby"
import React, {useState} from "react"
import logo from "../../images/logo.webp"
import Container from '../ui/Container';
import styles from './style.module.scss';
import menu from '../../images/menu.svg';
import menu_x from '../../images/menu_x.svg';
import search_icon from '../../images/search.svg';
const Header = () => {
  const data = useStaticQuery(graphql`
    query MyMenuQuery {
      allWpMenu(filter: { name: { eq: "Main menu" } }) {
        edges {
          node {
            name
            id
            menuItems {
              nodes {
                label
                url
                id
                uri
              }
            }
          }
        }
      }
    }
  `)
  const menuItems = data.allWpMenu.edges[0].node.menuItems.nodes
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <header className={styles.headerContainer}>
      <Container className={styles.header}>
        <div>
          <Link to="/">
            <img src={logo} className={styles.header__logo} />
          </Link>
        </div>
        <nav className={styles.header__navigation} style={{maxHeight: menuOpened? '50rem': '0'}}>
          <ul className={styles.header__navigation__list}>
            {menuItems.map(item => (
              <li 
                key={item.id} 
                className={styles.header__navigation__list__item}
              >
                <Link to={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className={styles.header__navigation__searchDesktop}>
            <img src={search_icon} alt=""/>
          </div>
        </nav>
          <div className={styles.header__menuMobile}>
            {menuOpened &&
              <img src={menu_x} alt="" onClick={()=>setMenuOpened(false)}/>
            }
            {!menuOpened &&
              <img src={menu} alt="" onClick={()=>setMenuOpened(true)}/>
            }
          </div>
      </Container>
    </header>
  )
}
export default Header
