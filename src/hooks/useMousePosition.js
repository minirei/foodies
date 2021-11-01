import React, { useState, useEffect } from "react"

export default function useMousePosition({ hovered }) {
  let [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  })

  useEffect(() => {
    function handlePosition(e) {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      })
    }
    window.addEventListener("mousemove", handlePosition)
    return () => {
      window.removeEventListener("mousemove", handlePosition)
    }

    // Honestly this somehow prevents the floating image from snapping in
    useEffect(() => {
      handlePosition
    }, [hovered])
  }, [])

  return mousePosition
}
