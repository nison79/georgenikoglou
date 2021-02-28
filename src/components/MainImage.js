import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const MainImage = () => {
  const data = useStaticQuery(graphql`
    query MainImage {
  image: file(relativePath: {eq: "main2.jpg"}) {
    childImageSharp {
      fluid(maxWidth:1800, quality:100) {
        src
        ...GatsbyImageSharpFluid
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
    <Container>
      <Img 
      key = {data.image.id}
      fluid ={data.image.childImageSharp.fluid}
      alt="a scenery in the road"
      />
    </Container>
  )
}

export default MainImage

const Container = styled.div`
  max-width:1500px;
  width:100%;
  margin: 0 auto;
`