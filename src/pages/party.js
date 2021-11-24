import React, { useState, useEffect } from "react"

// Components
import Layout from "../components/Layout"
import FoodieParties from "../components/FoodieParties"

const PartyPage = () => {
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
          <FoodieParties />
        </Layout>
      )}
    </>
  )
}

export default PartyPage
