import { Box, Button, Heading, Text } from "@chakra-ui/react"
import ky from "ky"
import { responseTypes } from "ky/distribution/core/constants"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Navbar from "~/src/components/Navbar"
import { JsonResponse } from "~/src/services/types/types"
import "node_modules/video-react/dist/video-react.css"
import { Player } from "video-react"
const Movie = () => {
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    fetch()
  }, [])
  const [movie, setMovie] = useState<JsonResponse[]>([])

  const fetch = async () => {
    const response = await ky.get("/api/fetchJson").json<JsonResponse[]>()
    if (response) {
      setMovie(response)
    }
    // console.log(movie, "movie")
  }

  const playvideo = () => {
    console.log("video started")
  }
  // const { player } = this.player.getState()
  // console.log(player.currentTime)
  return (
    <Box h="100vh" w="100%" bgColor="#10171d">
      <Navbar />
      <Box h="500px" maxW="80%" m="auto" position="relative">
        <Player
          playsInline
          poster={movie[`${id}` - 1]?.thumbnail}
          src={movie[`${id}` - 1]?.videolink}
        />
        <Box
          h="100%"
          w="100%"
          className="helo"
          position="absolute"
          bgGradient="linear(to-r, #10171d, #10171d8f)"
          top="0"
          bottom="0"
          left="0"
          right="0"
        >
          <Box w="50%">
            <Heading color="#fff">{movie[`${id}` - 1]?.title}</Heading>
            <Text mt="25px" color="#fff">
              {movie[`${id}` - 1]?.description}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Movie
