import React, { useState, useEffect } from "react"

// Components
import Layout from "../components/shared/Layout"
import FoodieSupply from "../components/FoodieSupply"

const SupplyPage = () => {
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
          <FoodieSupply />
        </Layout>
      )}
    </>
  )
}

export default SupplyPage
