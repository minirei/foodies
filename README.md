# Foodies

## To-Do

- work on mobile integrations

  - sitenav
  - launch
  - gallery showreel
  - curtain reveal (just scroll)
  - roadmap (do this first)
    - shift pos of bullets to bottom left, pos of nav to top left (MOBILE)

  - ref: toggle animations for mobile (isMobile ? {smth here} : {})
    - https://stackoverflow.com/questions/68195160/how-do-i-turn-off-framer-motion-animations-in-mobile-view
    - https://codesandbox.io/s/framer-motion-stackoverflow-q1-yigvv?file=/src/App.js:0-63

- about page
- faq page
- guide page

### Design Concerns

- COLOUR SCHEME

  - background is sepia: rgb(255,248, 237)
  - text colour is rgb(40,10,11)
  - find DEFAULTS for launch, curtain, menu
  - curtain needs 3 additional colours
  - gallery needs 4 additional colours

  possibles:
  - rgb(255,229,211)
  - rgb(178,254,233)

- feedback
  - gallery images too big
  - follow us no filter too high
  - scale font size better (do this while doing mobile)

### Optimisation Concerns

- implement gatsby-plugin-layout
  - ref: https://www.gatsbyjs.com/plugins/gatsby-plugin-layout/
- do some code splitting optimisation

## Colour

rgb(255,248,237)

## Website - The Stack

Frontend: Gatsby

- images
  - `npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp`
- framer-motion
- styled-components
  - `npm install gatsby-plugin-styled-components styled-components babel-plugin-styled-components styled-normalize`
- gatsby-plugin-react-helmet react-helmet
- eslint-config-react-app (--save-dev)
- cloud functionality
  - npm install --save gatsby-plugin-gatsby-cloud

### Fonts

Sans-Serif

- Poppins - https://www.typewolf.com/poppins
  Serif
- Garamond

## USEFUL

- Add Token Policy - "Metadata
  We follow CIP-25, the NFT metadata standard on Cardano, which was created by SpaceBudz. Images are stored on IPFS and you find the image link to a SpaceBud inside the metadata."
  - https://github.com/cardano-foundation/CIPs/blob/master/CIP-0025/CIP-0025.md
