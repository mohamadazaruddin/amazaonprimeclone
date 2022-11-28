import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { SWRConfig } from "swr"
import theme from "../styles/theme"
import router from "next/router"
import React from "react"
import "../styles/global.css"

function MyApp({ Component, pageProps }: AppProps) {
  const fetcher = async (url: string) => {
    const res = await fetch(url)

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.")
      // Attach extra info to the error object.
      // @ts-ignore
      error.info = await res.json()
      // @ts-ignore
      error.status = res.status
      if (res.status === 401 || res.status === 403) {
        const loginUrl = process.env.NEXT_PUBLIC_AUTH0_LOGIN || "/login"
        const currentLocation = window.location.toString()
        const returnToPath =
          currentLocation.replace(new URL(currentLocation).origin, "") || "/"
        await router.replace(
          `${loginUrl}?returnTo=${encodeURIComponent(returnToPath)}`,
        )
      } else {
        throw error
      }
    }

    return res.json()
  }

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  )
}

export default MyApp
