import { extendTheme, ThemeConfig } from "@chakra-ui/react"

import { colors } from "./foundations/colors"
import shadows from "./foundations/shadows"
import textStyles from "./foundations/textStyles"
import styles from "./styles"

const config: ThemeConfig = {
  initialColorMode: "light",
}

const theme = extendTheme({
  config,
  fonts: {
    heading: "Mulish, sans-serif",
    body: "Mulish, sans-serif",
  },
  shadows,

  //set the global lineHeight as per TFO design system
  lineHeights: {
    base: 1.2,
  },
  border: {
    defaultBorder: "1px solid #4d4d4d",
  },
  colors,
  accordianStyles: {
    borderTopStartRadius16: "16px",
    borderBottomStartRadius16: "16px",
    borderStart8: "8px",
  },
  styles,
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
  textStyles,
  components: {},
})

export default theme
