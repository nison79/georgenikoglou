import React from "react"
import Navbar from "../components/Navbar"
import MainImage from '../components/MainImage'


import styled from 'styled-components'

export default function Home() {
  return (
    <Container>
      <Navbar />
      <MainImage />
    </Container>
  ) 
}


const Container = styled.div`
  display:flex;
  justify-content:space-between;

`
