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

    image :file(relativePath: {eq: "logo.png"}) {
    childImageSharp {
      fixed(
        width:180
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
      <Img 
        fixed={data.image.childImageSharp.fixed}
        alt="logo"
        
      />
      <UnorderList>
        <LiItems>
          <Link to="black-white">Black/White</Link>
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
  /* background-color:lightblue; */
  width:200px;
  height:100vh;
  padding:2rem 1rem;
  /* justify-content:space-between; */
`

const UnorderList = styled.ul`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  list-style-type:none;
  width:150px;
  margin-top:3rem;

`

const LiItems = styled.li`
  font-family:'Questrial';
  margin-bottom:1.5rem;
  /* background-color:lightgrey; */
  a {
    text-decoration:none;
  }

`


