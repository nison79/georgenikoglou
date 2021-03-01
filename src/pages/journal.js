import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'


const Journal = () => {
  return(
    <Container>
        <Navbar />
          <Box>
            <Title>Journal</Title>
            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, eligendi minima. Nulla in repudiandae assumenda, laborum est a laboriosam mollitia facere optio excepturi? Dolorem minima sapiente at tenetur deserunt debitis, ex impedit doloribus blanditiis hic iure. Illum ut in ipsa.</Text>
          </Box>
    </Container>
  )
}

export default Journal

const Container = styled.div`
  display:flex;
  /* align-items:center; */
  /* justify-content:space-around; */
  min-height:100vh;
  background-color:lightpink;

`

const Title = styled.h2`
  font-family:'Poppins';
  font-weight: 500;
  font-size:2.3rem;
  margin-right:6rem;
  margin-top:20rem;
  
`

const Text = styled.p`
  max-width:500px;
  font-family:'Poppins';
  font-size:1.2rem;
  margin-right:6rem;
  margin-top:20rem;
  /* margin: 0 auto; */

`

const Box = styled.div`
  display:flex;
  flex-direction:row;
  margin: 0 auto;
`