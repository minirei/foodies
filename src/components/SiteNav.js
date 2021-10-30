import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

// Styles
import { Container, Flex } from "../styles/globalStyles"
import { Menu} from "../styles/headerStyles"
import {
  SiteNavSection,
  NavHeader,
  NavLogo,
  NavContent,
  NavBottom,
  Socials,
  Icon,
} from "../styles/navStyles"

const SiteNav = () => {
  return (
    <>
      <SiteNavSection>
        <NavHeader>
          <Flex spaceBetween>
            <NavLogo>
              <Link href="/">
                <h1>Foodies</h1>
              </Link>
            </NavLogo>
            <Menu>
              <button>
                <span></span>
                <span></span>
              </button>
            </Menu>
          </Flex>
        </NavHeader>
        <Flex vertical>
          <NavContent></NavContent>
          <NavBottom>
            <Flex>
              <div>CARDANO LOGO COPYRIGHT</div>
              <div>POLICY ID, email</div>
              <Socials>
                <Flex>
                  <Icon>
                    <a href="https://google.com">
                      <div>FACEBOOK</div>
                    </a>
                  </Icon>
                </Flex>
              </Socials>
            </Flex>
          </NavBottom>
        </Flex>
      </SiteNavSection>
    </>
  )
}

export default SiteNav
