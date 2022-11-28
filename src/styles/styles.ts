import { GlobalStyleProps, mode } from "@chakra-ui/theme-tools"

// Global style overrides.
const styles = {
  global: (props: GlobalStyleProps) => {
    return {
      html: {
        height: "100%",
      },
      "#__next": {
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
      },
      main: {
        flex: "1 0 auto",
      },
      // Scrollbars.
      "*::-webkit-scrollbar": {
        width: "10px",
        height: "10px",
      },
      "*::-webkit-scrollbar-track": {
        background: "#333",
      },
      "::-webkit-scrollbar-thumb": {
        background: "gray.850",
      },
      "::-webkit-scrollbar-corner": {
        background: "transparent",
      },
      // input placeholder style
      "::-webkit-input-placeholder": {
        color: "gray.500",
        overflow: "visible",
      },
      body: {
        height: "100%",
        color: mode("gray.700", "whiteAlpha.900")(props),
        background: mode("white", "gray.900")(props),
        lineHeight: 1.2,
      },
    }
  },
}

export default styles
