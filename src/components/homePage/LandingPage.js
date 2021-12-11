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
  const dropDate = new Date("December 17, 2021 16:00:00")
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
          <div className="timer">
            <div className="box">
              <span className="digit">{days}</span>
              <span>Days</span>
            </div>
            <div className="box second">
              <span className="digit">{hours}</span>
              <span>Hours</span>
            </div>
            <div className="box">
              <span className="digit">{minutes}</span>
              <span>Minutes</span>
            </div>
            <div className="box second">
              <span className="digit">{seconds}</span>
              <span>Seconds</span>
            </div>
          </div>
        </TimerSection>
      </BackgroundSection>
    </>
  )
}

export default LandingPage
