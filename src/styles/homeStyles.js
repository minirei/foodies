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
  padding: 10vh 0;
`
export const HomeAboutContent = styled.div`
  width: 40%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.6rem;
    padding-bottom: 2rem;
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

// Launch Section
export const HomeLaunchSection = styled.div`
  position: relative;
  width: 100%;
  background-color: palegoldenrod;
  /* padding-bottom: 20vh; */
`
export const HomeLaunchContent = styled.div`
  width: 100%;
  background-color: palegoldenrod;

  .launchInfo {
    width: 60%;
    h3 {
      width: 100%;
      font-weight: 600;
      font-size: 4rem;
      line-height: 10rem;
      text-transform: uppercase;
      text-align: left;
      margin: 0 auto;
    }
    p {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 2rem;
      text-align: justify;
      margin: 0 auto 10vh;
    }
  }

  h1 {
    width: 30%;
    font-weight: 800;
    font-size: 12rem;
    line-height: 10rem;
    margin: 0;
  }
`
export const HomeLaunchGallery = styled.div`
  position: relative;
  width: 100%;
  background-color: lightcoral;
  /* padding-bottom: 10vh; */

  h3 {
    font-weight: 400;
    font-size: 2rem;
    text-align: start;
    line-height: 3rem;
    margin: 0 auto;
    padding: 2rem 0;
  }
`

export const GalleryImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5vw;
`

export const HomeLaunchImage = styled.div`
  width: 100%;
  @media (min-width: 1408px) {
    width: 23%;
  }

  p {
    font-weight: 500;
    font-size: 2rem;
    text-align: center;
    margin: 1rem auto 10vh;
  }

  .image {
    border: 3px solid black;
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
