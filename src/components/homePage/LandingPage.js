import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTimer } from "react-timer-hook"

// Styles
import { BackgroundSection, TimerSection } from "../../styles/homeStyles"

// Context
import { useGlobalStateContext } from "../../context/globalContext"
import { useEffect } from "react"

const LandingPage = () => {
  const { isMobile } = useGlobalStateContext()

  // Timer
  const dropDate = new Date(Date.UTC(2021, 11, 17, 16))
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    dropDate,
    onExpire: () => console.warn("onExpire called"),
  })

  useEffect(() => {
    restart(dropDate)
  }, [])

  return (
    <>
      <BackgroundSection>
        <StaticImage
          src="../../assets/images/hero.png"
          className="wrapper"
          style={{
            backgroundAttachment: isMobile ? "" : "fixed",
            height: isMobile ? "70vh" : "100vh",
          }}
          placeholder="blurred"
          loading="eager"
        ></StaticImage>
        <TimerSection className={`${isMobile && "mobile"}`}>
          <div className="launchWrapper">
            <div className="firstLine">
              <p>Minting Now!</p>
            </div>
            <div className="secondLine">
              <p>
                <li><strong>1</strong> Foodie: <strong>45</strong> ADA</li>
                <li><strong>3</strong> Foodies: <strong>135</strong> ADA</li>
                <li><strong>5</strong> Foodies: <strong>225</strong> ADA</li>
              </p>
            </div>
            <div className="thirdLine">
              <p>
                Send the <em>exact</em> amount of ADA to:
              </p>
            </div>
            <div className="forthLine">
              <p>addr1v9fvvwz8y79f955rp5ruz8dhrm73mskvph9r3vykdfrultsarc0vm</p>
              <div
                className="svgWrapper"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "addr1v9fvvwz8y79f955rp5ruz8dhrm73mskvph9r3vykdfrultsarc0vm"
                  )
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z" />
                </svg>
              </div>
            </div>
          </div>
        </TimerSection>
      </BackgroundSection>
    </>
  )
}

export default LandingPage
