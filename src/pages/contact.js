import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import InstaImage from '../components/InstaImage'
import TwitterImage from '../components/TwitterImage'


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


              <IconImages>
                <a
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://www.instagram.com/georgenikoglou/"><InstaImage />
                </a>
                
                <a
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://twitter.com/gnikoglou79"><TwitterImage />
                </a>
              </IconImages>

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
  color:black;
  font-family:'Poppins';
  font-weight: 900;
  font-size:3rem;
  margin-left:0rem;
  margin-top:1rem;
  text-transform:uppercase;
  
`

const Text = styled.p`
  color:black;
  max-width:500px;
  font-family:'Poppins';
  font-size:1rem;
  margin:0;
  margin-top:0.5rem;
  
  /* margin: 0 auto; */
`

const Box = styled.div`
  
  background-color:white;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin: 0 auto;
`

const Box2 = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  
  padding:1rem;
`

const TitleText = styled.h2`
  margin:0;
  margin-bottom:1.5rem;
  color:black;
  font-family:'Poppins';
  font-size:1.5rem;
  font-weight: 900;
`

const IconImages = styled.div`
  display:flex;
  padding-top:1rem;
  a {
    margin-right:1rem;
  }
`