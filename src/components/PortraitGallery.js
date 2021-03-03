import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import styled from 'styled-components'




const PortraitGallery = () => {
  const data = useStaticQuery(graphql`
    query PortraitImages {
    images : allFile( filter: { relativeDirectory: { eq: "gallery-portrait" }}){
      nodes {
        id
        childImageSharp {
          fluid (maxWidth:2000 ,quality:100,fit:COVER){
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
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
          fluid={image.childImageSharp.fluid} />
        ))}
      </GalleryContent>

    </div>
  )
}

export default PortraitGallery

const GalleryContent = styled.div`
max-width:100%;
  Img {
    padding:1rem;
  }
  h1{
    margin-left:1rem;
    font-size:4rem;
    font-family:'Questrial';
    letter-spacing:-2px;
  }
`