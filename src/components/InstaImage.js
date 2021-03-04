import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const InstaImage = () => {
  const data = useStaticQuery(graphql`
    query InstaImage {
  image: file(relativePath: {eq: "insta.jpg"}) {
    childImageSharp {
      fixed(width:50) {
        src
        ...GatsbyImageSharpFixed_withWebp
      }
      # original {
      #   width
      # }
    }
  }
}
  `)
  console.log(data);
  return (
    
      <Img 
      key = {data.image.id}
      fixed ={data.image.childImageSharp.fixed}
      alt="a scenery in the road"
      />
  
  )
}

export default InstaImage

