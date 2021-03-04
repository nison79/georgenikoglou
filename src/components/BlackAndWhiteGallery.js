import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import styled from 'styled-components'


const BlackAndWhiteGallery = () => {
  const data = useStaticQuery(graphql`
    query Images {
    images : allFile( filter: { relativeDirectory: { eq: "gallery-black_white" }}){
      nodes {
        id
        childImageSharp {
          fluid (maxWidth:1500 ,quality:100,fit:COVER){
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

export default BlackAndWhiteGallery

const GalleryContent = styled.div`
  max-width:100%;
  display:grid;
  grid-template-columns:1fr 1fr;

  img{
    padding:1rem;
    
  }
`
