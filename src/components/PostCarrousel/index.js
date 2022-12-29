import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image"
const PostCarrousel = ({ posts }) => {
  
  return (
    <Carousel>
      {posts.map(post => {
        return (
          <Carousel.Item key={post.id}>
            {post?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData && (
              <GatsbyImage
                image={post?.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData}
                alt={post?.featuredImage?.node?.alt || ''}
                style={{ marginBottom: 50 }}
              />
            )}
            <p>{post.title}</p>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}
export default PostCarrousel
