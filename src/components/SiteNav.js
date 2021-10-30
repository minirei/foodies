import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

// Styles
import { Container, Flex } from "../styles/globalStyles"
import { Menu, Logo } from "../styles/headerStyles"
import {
  SiteNavSection,
  NavHeader,
  NavContent,
  Heading,
  NavBottom,
  Socials,
  Icon,
} from "../styles/navStyles"

const SiteNav = () => {
  return (
    <>
      <SiteNavSection>
        <NavHeader>
          <Logo>
            <h1>Foodies</h1>
          </Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </NavHeader>
        <Flex vertical center>
          <NavContent>
            <div className="main">
              <Heading large>About</Heading>
              <Heading large>FAQs</Heading>
              <Heading large>Guide</Heading>
              <Heading large>Mint</Heading>
            </div>
            <div className="roadmap">
              <Heading large>Roadmap</Heading>
              <Heading>Foodie Parties</Heading>
              <Heading>Foodie Kitchen</Heading>
              <Heading>Supply Drop</Heading>
              <Heading>Foodie Wars</Heading>

            </div>
          </NavContent>
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
