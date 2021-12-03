import React, { useState, useEffect } from "react"

// Components
import Layout from "../components/shared/Layout"

const NotFoundPage = () => {
  // loading (needed so that i don't call window during SSR)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading")
  }, [loading])

  useEffect(() => {
    setLoading(false)
  })

  return (
    <>
      {loading ? (
        <div></div>
      ) : (
        <Layout>
          <div
            className="notFoundSection"
            style={{
              paddingTop: "20vh",
              paddingLeft: "3%",
              height: "70vh",
              width: "100vw",
            }}
          >
            <h1>
              Sorry, this page is under construction! Please be patient with us
              :D
            </h1>
          </div>
        </Layout>
      )}
    </>
  )
}

export default NotFoundPage
