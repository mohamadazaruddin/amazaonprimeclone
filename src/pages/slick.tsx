import { Box, Heading } from "@chakra-ui/react"
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import React, { Component } from "react"
import { render } from "react-dom"
import Slider from "react-slick"
import Navbar from "../components/Navbar"
export default function slick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <Navbar />
      <Heading>Slider with React Slick</Heading>
      <Box display="flex">
        {" "}
        <h2> Single Item</h2>
        <Slider {...settings}>
          <Box bgColor="red">
            <h3>1</h3>
          </Box>
          <Box bgColor="green">
            <h3>2</h3>
          </Box>
          <Box bgColor="blue">
            <h3>3</h3>
          </Box>
          <Box bgColor="yellow">
            <h3>4</h3>
          </Box>
          <Box bgColor="orange">
            <h3>5</h3>
          </Box>
          <Box bgColor="navy">
            <h3>6</h3>
          </Box>
        </Slider>
      </Box>
    </>
  )
}
