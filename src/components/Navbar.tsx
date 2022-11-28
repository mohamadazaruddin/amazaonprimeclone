import React from "react"
import { Stack, HStack, VStack, Image, Box, color } from "@chakra-ui/react"
import { Router, useRouter } from "next/router"
export default function Navbar() {
  const navbarLinks = [
    {
      page: "React-Slick",
      link: "/slick",
    },
    {
      page: "Swiper Js",
      link: "/swiper",
    },
  ]
  const router = useRouter()
  return (
    <Box>
      <HStack bgColor="#1b252e">
        <Image
          src="/Logo.png"
          w="60px"
          onClick={() => {
            router.push("/")
          }}
        />
        {navbarLinks.map((pages, i) => (
          <Box
            p="10px"
            key={i}
            color="#ffffff"
            cursor="pointer"
            onClick={() => {
              router.push(pages.link)
            }}
          >
            {pages.page}
          </Box>
        ))}
      </HStack>
    </Box>
  )
}
