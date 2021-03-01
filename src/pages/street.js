import React from 'react'
import StreetGallery from '../components/StreetGallery'
import styled from 'styled-components'
import Navbar from '../components/Navbar'


export const BlackWhite = () => {
  return (
      <Container>
        <Navbar />
          <Box>
            <Text>The cities we are living is a crucial part of our selves, the buildings , the people and their activities , the animals , the moments that we become part of the living community, are very special and I want to take a snapshot. No only to freeze the action but also to make some of them memorable. </Text>
            <StreetGallery />
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
  max-width:700px;
  font-family:'Poppins';
  font-size:1rem;
  margin-left:2.2rem;
`

const Box = styled.div`
  display:flex;
  flex-direction:column;
`

