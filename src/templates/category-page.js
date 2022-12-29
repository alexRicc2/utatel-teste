import { Link, graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import parse from "html-react-parser"
const CategoryPage = ({data, pageContext})=> {
    const posts = data.allWpPost.edges
    console.log('olha os posts', posts)
    return (
        <Layout>
            <div>{pageContext.name}</div>
            {posts.map(({post}) =>{
                {console.log('esse eh o post',post)}
                return(
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <Link to={post.uri}>{post.title}</Link>
                        <section itemProp="description">{parse(post.excerpt)}</section>
                    </div>
                )
            })}
            
        </Layout>
    )
}
export default CategoryPage
export const pageQuery = graphql`
query MyQuery($slugCategory: String){
    allWpPost(filter: 
      {categories: 
        {nodes: 
          {elemMatch: 
            {slug: 
              {eq: $slugCategory}
            }
          }
        }
      }) {
      edges {
        post: node {
          title
          id
          uri
          excerpt
          categories{
            nodes{
              name
            }
          }
        }
      }
    }
  }
`