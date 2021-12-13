import styled, { css } from "styled-components"

export const SubPageContainer = styled.div`
  width: 100vw;
  height: fit-content;
  padding-top: 15vh;
  padding-bottom: 10vh;
  .wrapper {
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }
  &.mobile {
    padding-top: 10vh;
    .wrapper {
      width: 100%;
    }
  }
  .link {
    font-weight: 600;
    color: inherit;
    position: relative;
    :before {
      left: 0;
      bottom: 10%;
      content: "";
      height: 2px;
      background: rgb(40, 10, 11);
      position: absolute;
      transform: scaleX(0);
      will-change: transform;
      transform-origin: right;
      width: 100%;
      transition: transform 0.4s ease-out, background 500ms linear;
    }

    :hover {
      :before {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
`

export const SubPageSection = styled.div`
  width: 100%;
  cursor: default;
  p {
    word-wrap: break-word;
    width: 100%;
    &.addSpacing {
      padding-top: calc(1rem + 1vw);
    }
    &.kitchenStep {
      font-size: calc(1.2rem + 0.8vw);
      line-height: calc(1.2rem + 1.6vw);
      font-weight: 600;
    }
    &.centered {
      text-align: center;
      font-weight: 500;
    }
  }
  li {
    margin-left: 1rem;
    text-align: left;
    margin-bottom: 0.8rem;
    &.mobile {
      margin-left: 0;
    }
  }
  strong {
    font-weight: 600;
  }

  .question {
    font-style: italic;
    font-weight: 600;
    padding-top: calc(1rem + 1vw);
    &.firstChild {
      padding-top: 0;
    }
  }

  .caption {
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
      font-size: calc(1rem + 0.3vw);
    }
  }

  .videoWrapper {
    width: 100%;
    height: 50vh;
    .video {
      height: 100%;
      width: 100%;
      border: 0;
    }
    &.mobile {
      height: 20vh;
    }
  }
`

export const ImageArray = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  position: relative;
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    .imageWrapper {
      width: 100%;
      height: 100%;
      position: relative;
    }
  }
  .plus {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* transform-origin: center; */
    font-size: calc(1.6rem + 3vw);
    text-align: center;
  }

  ${props =>
    props.kitchen &&
    css`
      height: fit-content;
    `}
`
