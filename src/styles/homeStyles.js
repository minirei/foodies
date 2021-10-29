import styled from "styled-components"

// Landing Section
export const LandingImage = styled.div`
  width: 100vw;
  /* height needs a media query for mobile */
  height: 100vh;
  position: relative;
  /* bottom: 10vh; */
  .hero {
    height: auto;
    max-height: 100%;
    width: 100%;
    overflow: hidden;
    position: absolute;
  }
`

// About Section
export const HomeAboutSection = styled.div`
  position: relative;
  width: 100%;
  height: 120vh;
  cursor: default;
`
export const HomeAboutContent = styled.div`
  width: 55%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    font-family: "EB Garamond", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    font-size: 3rem;
    line-height: 3rem;
  }

  p {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    padding-bottom: 1rem;
    text-align: justify;
  }
`
export const HomeAboutImage = styled.div`
  width: 40%;
  .image {
    border: 2px solid black;
  }
`

// IDK if i'm going to use this
export const HomeLaunchFiller = styled.div`
  width: 100%;
  background-color: palegoldenrod;
  p {
    font-weight: 500;
    font-size: 2rem;
    text-align: center;
    /* color: red; */
  }
`
