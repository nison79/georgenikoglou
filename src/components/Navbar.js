import React from 'react'
import { Link } from 'gatsby'
import { graphql , useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Navbar =() => {

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
        <LiItems>
          <Link to="/black-white">Black/White</Link>
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
  width:150px;
  height:50vh;
  padding:1rem 1rem;
  justify-content:space-around;
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
    font-size:1.5rem;

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

`


