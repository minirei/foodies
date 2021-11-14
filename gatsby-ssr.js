import React from "react"
import { GlobalProvider } from "./src/context/globalContext"

export const wrapRootElement = ({ element }) => {
  return <GlobalProvider>{element}</GlobalProvider>
}

export const shouldUpdateScroll = ({
  routerProps: { location },
  // getSavedScrollPosition,
}) => {
  const { pathname } = location
  // list of routes for the scroll-to-top-hook
  const scrollToTopRoutes = [`/404`, `/about`, `/faq`, `/guide`, `/privacypolicy`, `/termsofuse`]
  // if the new route is part of the list above, scroll to top (0, 0)
  if (scrollToTopRoutes.indexOf(pathname) !== -1) {
    window.scrollTo(0, 0)
  }

  return false
}
