import React from 'react'
import { Link } from 'gatsby'
import { graphql , useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Navbar = ( { primary }) => {

  const data = useStaticQuery(graphql`
    query Image {
    # images : allFile( filter: { relativeDirectory: { eq: "gallery" }}){
    #   nodes {
    #     id
    #     childImageSharp {
    #       fixed(width:200){
    #         ...GatsbyImageSharpFixed
    #       }
    #     }
    #   }
    # }

    image :file(relativePath: {eq: "logobig.png"}) {
    childImageSharp {
      fixed(
        width:120 ,quality:100
      ) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
  
  `)
console.log(data);
  return (
    <Nav>
    <Link to="/">
      <Img 
        fixed={data.image.childImageSharp.fixed}
        alt="logo"
        
      />
      </Link>
      <UnorderList>
        <LiItems >
          <Link primary = {primary} to="/black-white">Black/White</Link>
        </LiItems>

        <LiItems>
          <Link to="/street">Street</Link>
        </LiItems>

        <LiItems>
          <Link to="/portrait">Portrait</Link>
        </LiItems>

        <LiItems>
          <Link to="/bio">Bio</Link>
        </LiItems>

        <LiItems>
          <Link to="/journal">Journal</Link>
        </LiItems>

        <LiItems>
          <Link to="/contact">Contact</Link>
        </LiItems>
      </UnorderList>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  display:flex;
  flex-direction:column;
  /* background-color:lightblue; */
  width:100px;
  height:50vh;
  padding:1rem 1rem;
  margin-right:7rem;
  justify-content:space-around;
  @media(max-width:791px){
    margin-right:3rem;
  }
  @media(max-width:690px){
    margin-right:2rem;
  }
`

const UnorderList = styled.ul`
  display:block;
  list-style-type:none;
  width:150px;
  margin-top:1rem;
  padding:0;
  /* background-color:lightblue; */
  a {
    text-decoration:none;
    color:black;
    font-size:1.2rem;

  }

  

`

const LiItems = styled.li`
  font-family:'Questrial';
  align-items:center;
  margin-bottom:1.5rem;
  margin-left:0rem; 
  
  /* background-color:lightgrey; */
  a {
    text-decoration:none;
    
    
  }
  :nth-child(4) {
    margin-top:5rem;
  }
  :nth-child(3) {
    margin-bottom:10rem;
  }

`


