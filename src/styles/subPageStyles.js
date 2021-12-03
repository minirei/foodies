import styled from "styled-components"

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
  }
  li {
    margin-left: 1rem;
    text-align: left;
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
  .addSpacing {
    padding-top: calc(1rem + 1vw);
  }

  .videoWrapper {
    width: 100%;
    height: 40vh;
    .video {
      height: 100%;
      width: 100%;
    }
  }
`

export const SupplyExamples = styled.div`
  display: flex;
  height: 40vh;
  width: 100%;
  position: relative;
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    .imageWrapper {
      width: 100%;
      height: 100%;
      overflow: hidden;
      position: relative;
    }
    .caption {
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        margin-top: 0;
        text-align: center;
        font-size: calc(1rem + 0.3vw);
      }
    }
  }
`
