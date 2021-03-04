import React from 'react'
import BlackAndWhiteGallery from '../components/BlackAndWhiteGallery'
import styled from 'styled-components'
import Navbar from '../components/Navbar'


export const BlackWhite = () => {
  return (
      <Container>
        <Navbar />
          <Box>
            <Text>In order to maintain the positive style to create images that captures something from this world, is crucial to limit our selves to the basic .</Text>
            <BlackAndWhiteGallery />
          </Box>
      </Container>
    
  )
}

export default BlackWhite

const Container = styled.div`
  
  display:flex;
  justify-content:space-between;

`

// const Title = styled.h1`
//   font-family:'Poppins';
//   font-size:3rem;
//   font-weight:900;
//   /* margin-left:1rem; */
//   margin: 0 auto;
//   margin-top:4.9rem;
// `

const Text = styled.p`
  max-width:400px;
  font-family:'Poppins';
  font-size:1rem;
  margin-left:1rem;
  color:#123A6B;
`

const Box = styled.div`
  width:100%;
  
  display:flex;
  flex-direction:column;
  
  width:100%;
`
