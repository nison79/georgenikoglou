import React from 'react'
import PortraitGallery from '../components/PortraitGallery'
import styled from 'styled-components'
import Navbar from '../components/Navbar'


export const Portrait = () => {
  return (
      <Container>
        <Navbar />
          <Box>
            <Text>People's faces are a universe to explore. The expression of their eyes, the pose of the body, the position and distance from the camera can vary in many ways but the thing that is permanent is the instant moment when you can catch their beauty.  </Text>
            <PortraitGallery />
          </Box>
      </Container>
    
  )
}

export default Portrait

const Container = styled.div`

  display:flex;

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
  max-width:600px;
  font-family:'Poppins';
  font-size:1rem;
  margin-left:1rem;
  
`

const Box = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
`

