import React from 'react'
import { Link } from 'gatsby'
import { graphql , useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Navbar =() => {

  const data = useStaticQuery(graphql`
    query Images {
    images : allFile( filter: { relativeDirectory: { eq: "gallery" }}){
      nodes {
        id
      }
    }

    image :file(relativePath: {eq: "logo.png"}) {
    childImageSharp {
      fixed(
        width:220
      ) {
        ...GatsbyImageSharpFixed
      }
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
  
  `)
console.log(data);
  return (
    <Nav>
      <Img 
        fixed={data.image.childImageSharp.fixed}
        alt="logo"
        
      />
      <UnorderList>
        <LiItems>
          <Link to="family">Family</Link>
        </LiItems>

        <LiItems>
          <Link to="street">Street</Link>
        </LiItems>

        <LiItems>
          <Link to="portrait">Portrait</Link>
        </LiItems>

        <LiItems>
          <Link to="bio">Bio</Link>
        </LiItems>

        <LiItems>
          <Link to="journal">Journal</Link>
        </LiItems>

        <LiItems>
          <Link to="contact">Contact</Link>
        </LiItems>
      </UnorderList>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  display:flex;
  flex-direction:column;
  background-color:lightblue;
  width:300px;
  height:100vh;
  /* justify-content:space-between; */
`

const UnorderList = styled.ul`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  list-style-type:none;
  width:150px;

`

const LiItems = styled.li`

  margin-bottom:0.5rem;
  background-color:lightgrey;
  a {
    text-decoration:none;
  }

`


