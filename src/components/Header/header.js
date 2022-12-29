import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import logo from "../../images/logo.webp"

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

  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <ul>
        {menuItems.map(item => (
            <li key={item.id}>
                <Link to={item.url}>{item.label}</Link>
            </li>
        ))}
      </ul>
      <div></div>
    </header>
  )
}
export default Header
