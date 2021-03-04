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

    image :file(relativePath: {eq: "logo3.png"}) {
    childImageSharp {
      fixed(
        width:150 ,quality:100
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
        <br/>
        <br/>
        <br/>

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
  justify-content:space-between;
  /* background-color:lightblue; */
  width:100px;
  height:100vh;
  padding:1rem 1rem;
  margin-right:8rem;

  a {
    position:fixed;
  }

  @media(max-width:791px){
    margin-right:4rem;
  }
  @media(max-width:690px){
    margin-right:4rem;
  }
`

const UnorderList = styled.ul`
  position:fixed;
  display:block;
  list-style-type:none;
  width:150px;
  margin-top:8rem;
  padding:0;
  /* background-color:lightblue; */
  a {
    text-decoration:none;
    color:black;
    font-size:1.2rem;
  }
`

const LiItems = styled.li`
  text-transform:uppercase;
  padding: .8em 0 .8em .8em;
  cursor:pointer;
  align-items:center;
  margin-bottom:4rem;
  margin-left:0rem; 

  
  /* background-color:lightgrey; */
  a {
    text-decoration:none;
    font-family:'Poppins';
    font-weight:400;
    font-size:1.2rem;
    color:black;
    :hover {
      animation: matrix 4s ease-in-out ; 
      transform: matrix(0.9, 0.1, 0.1, 1, 0.2, 0.5);
      
    }
    
    
  }
  /* :nth-child(4) {
    margin-top:8rem;
  } */
  :nth-child(3) {
    margin-bottom:40rem;
  }

`


