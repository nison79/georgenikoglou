import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import styled from 'styled-components'


const Gallery = () => {
  const data = useStaticQuery(graphql`
    query Images {
    images : allFile( filter: { relativeDirectory: { eq: "gallery" }}){
      nodes {
        id
        childImageSharp {
          fixed (width:400, height:400 ,quality:100){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
  `)

  return (
    <div>
      
      <GalleryContent>
      
        {data.images.nodes.map(image => (
          <Img
          fadeIn
          key={image.id} 
          fixed={image.childImageSharp.fixed} />
        ))}
      </GalleryContent>

    </div>
  )
}

export default Gallery

const GalleryContent = styled.div`
  max-width:100%;
  Img {
    padding:2rem;
  }
  h1{
    margin-left:1rem;
    font-size:4rem;
    font-family:'Questrial';
    letter-spacing:-2px;
  }
`
