import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'


const Contact = () => {
  return(
    <Container>
        <Navbar />
          <Box>
            <Title>Contact</Title>
            <Box2>
              <TitleText>Feel free to reach me </TitleText>
              <Text>Email: georgenison@gmail.com</Text>
              <Text>Address: P.Dimitriou 20 Arkadikos Drama/Greece</Text>
              <Text>Mobile: 6945419898</Text>
            </Box2>
          </Box>
    </Container>
  )
}

export default Contact

const Container = styled.div`
  display:flex;
  /* align-items:center; */
  /* justify-content:space-around; */
  min-height:100vh;

`

const Title = styled.h2`
  color:white;
  font-family:'Poppins';
  font-weight: 900;
  font-size:1.5rem;
  margin-right:3rem;
  margin-left:1rem;
  margin-top:1rem;
  
`

const Text = styled.p`
  color:white;
  max-width:500px;
  font-family:'Poppins';
  font-size:1rem;
  margin:0;
  margin-top:0.5rem;
  
  /* margin: 0 auto; */
`

const Box = styled.div`
  width:800px;
  background-color:#892881;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  margin: 0 auto;
`

const Box2 = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  padding:7rem;
`

const TitleText = styled.h2`
  margin:0;
  color:white;
  font-family:'Poppins';
  font-size:2rem;
  font-weight: 900;
`