import React from 'react'
import Gallery from '../components/Gallery'
import styled from 'styled-components'
import Navbar from '../components/Navbar'


export const BlackWhite = () => {
  return (
      <Container>
        <Navbar />
          <Box>
            <Text>In order to maintain the positive style to create images that captures something from this world, is crucial to limit our selves to the basic .</Text>
            <Gallery />
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
  max-width:500px;
  font-family:'Poppins';
  font-size:0.9rem;
  margin-left:2rem;
`

const Box = styled.div`
  display:flex;
  flex-direction:column;
`

