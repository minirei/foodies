import { createGlobalStyle } from "styled-components"
import ButlerBlack from "./Butler-Black.woff"
import ButlerBlack2 from "./Butler-Black.woff2"
import ButlerBold from "./Butler-Bold.woff"
import ButlerBold2 from "./Butler-Bold.woff2"
import ButlerExtraBold from "./Butler-ExtraBold.woff"
import ButlerExtraBold2 from "./Butler-ExtraBold.woff2"
import ButlerLight from "./Butler-Light.woff"
import ButlerLight2 from "./Butler-Light.woff2"
import ButlerMedium from "./Butler-Medium.woff"
import ButlerMedium2 from "./Butler-Medium.woff2"
import ButlerUltraLight from "./Butler-UltraLight.woff"
import ButlerUltraLight2 from "./Butler-UltraLight.woff2"
import Butler from "./Butler.woff"
import Butler2 from "./Butler.woff2"

const ButlerFonts = createGlobalStyle`
    @font-face {
        font-family: 'Butler ';
        src: url(${ButlerMedium2}) format('woff2'),
            url(${ButlerMedium}) format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Butler ';
        src: url(${Butler2}) format('woff2'),
            url(${Butler}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Butler ';
        src: url(${ButlerExtraBold2}) format('woff2'),
            url(${ButlerExtraBold}) format('woff');
        font-weight: 800;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Butler ';
        src: url(${ButlerBlack2}) format('woff2'),
            url(${ButlerBlack}) format('woff');
        font-weight: 900;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Butler ';
        src: url(${ButlerUltraLight2}) format('woff2'),
            url(${ButlerUltraLight}) format('woff');
        font-weight: 200;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Butler ';
        src: url(${ButlerBold2}) format('woff2'),
            url(${ButlerBold}) format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Butler ';
        src: url(${ButlerLight2}) format('woff2'),
            url(${ButlerLight}) format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

`

export default ButlerFonts
