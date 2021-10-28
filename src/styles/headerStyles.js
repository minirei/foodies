import styled from "styled-components"

export const HeaderSection = styled.div`
  position: fixed;
  height: 10vh;
  width: 100%;
  z-index: 99;
`

export const Navigation = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 0.2rem;
    text-decoration: none;
    .navLink {
      color: black;
      margin-right: 1.4rem;
      :last-child {
        margin-right: 0;
      }
    }
  }
`
export const Logo = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  h1 {
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 0.5rem;
    color: black;
    margin: 0 auto;
  }
`
export const Socials = styled.div`
  .icon {
    height: 2.2rem;
    width: 2.2rem;
    display: block;
    position: relative;
    overflow: hidden;
    margin-right: 0.8rem;
    :last-child {
      margin-right: 0;
    }
    svg {
      position: absolute;
    }
    path {
      fill: black;
    }
  }
`
