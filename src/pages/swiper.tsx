import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Box, Button, Image, Text } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import { useSwiper } from "swiper/react"
import "swiper/css/bundle"
import { Autoplay, Navigation, Pagination } from "swiper"
import router from "next/router"
import { JsonResponse } from "../services/types/types"
import ky from "ky"
export default function swiper() {
  const [moviesData, setmoviesData] = useState<JsonResponse[]>()
  const [heroslider, setHeroslider] = useState<JsonResponse[]>()
  useEffect(() => {
    hanldeFetch()
  }, [])

  const hanldeFetch = async () => {
    const response = await ky.get("/api/fetchJson").json<JsonResponse[]>()
    const heroData = await ky.get("/herosliderData.json").json<JsonResponse[]>()
    if (response) {
      setmoviesData(response)
    }
    if (heroData) {
      setHeroslider(heroData)
    }
  }
  console.log(moviesData, "data")
  const swiper = useSwiper()
  return (
    <>
      <Navbar />
      <Box overflow="auto" bgColor="#000c2b">
        <Box>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            navigation
            modules={[Pagination, Navigation, Autoplay]}
          >
            {heroslider?.map((items, i) => (
              <SwiperSlide key={i}>
                <Box
                  bgImage={items.thumbnail}
                  w="100%"
                  h="400px"
                  bgPosition="center"
                  bgRepeat="no-repeat"
                  bgSize="100% 100%"
                ></Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Box p="40px">
          <Box w="100%" m="auto" mb="40px">
            <Text color="#fff" fontSize="20px">
              Kids & Family
            </Text>
            <Swiper
              spaceBetween={10}
              slidesPerView={6}
              zoom={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {moviesData?.map((video, i) => (
                <SwiperSlide key={i}>
                  <Box role="group" position="relative">
                    <Box
                      bgImage={video.thumbnail}
                      w="100%"
                      h="150px"
                      bgPosition="center"
                      bgSize="100% 100%"
                      onClick={() => {
                        router.push(`./movie/${video.id}`)
                      }}
                    ></Box>
                    <Box
                      // bgGradient="linear(#1b252e 0%, #1b252e 38%, #1b252e 73%)"'
                      h="0"
                      overflow="hidden"
                      bgColor="#1b252e"
                      _groupHover={{
                        h: "150px",
                      }}
                    >
                      <Box p="10px">
                        <Text m="0" color="#fff">
                          {/* {video.title} */}
                        </Text>{" "}
                        <Text m="0" color="#fff">
                          {/* {video.description} */}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
          <Box color="#fff">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
            assumenda quasi laudantium, sed nisi voluptatem repudiandae aperiam
            optio animi qui accusantium, laboriosam consectetur autem repellat
            corporis inventore nostrum aut error.
          </Box>
          {/* <Box w="100%" m="auto" mb="40px">
            <Text color="#fff" fontSize="20px">
              Kids & Family
            </Text>
            <Swiper
              spaceBetween={10}
              slidesPerView={6}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {kidsVideosData.map((video, i) => (
                <SwiperSlide key={i}>
                  <Box position="relative">
                    <Box
                      bgImage={video.thumbnail}
                      w="100%"
                      h="150px"
                      bgPosition="center"
                      bgSize="100% 100%"
                      onClick={() => {
                        router.push(`./movie/${video.id}`);
                      }}
                    ></Box>
                    <Box
                      h="150px"
                      // bgGradient="linear(#1b252e 0%, #1b252e 38%, #1b252e 73%)"'
                      overflow="hidden"
                      bgColor="#1b252e"
                      // position="absolute"
                      zIndex="100"
                      // _groupHover={{
                      //   h: "150px",
                      // }}
                    >
                      <Box p="10px">
                        <Text m="0" color="#fff">
                          {video.title}
                        </Text>{" "}
                        <Text m="0" color="#fff">
                          {video.description}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}{" "}
            </Swiper>
          </Box> */}
        </Box>
      </Box>
    </>
  )
}
