import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <>
        <Carousel>
      <Carousel.Item>
        <img src='/image1.jpeg' style={{width:'100%', height:'85vh'}} />
      </Carousel.Item>
      <Carousel.Item>
        <img src='/image2.jpeg' style={{width:'100%', height:'85vh'}}  />
      </Carousel.Item>
      <Carousel.Item>
        <img src='/image3.jpeg' style={{width:'100%', height:'85vh'}}  />
      </Carousel.Item>
      <Carousel.Item>
        <img src='/image4.jpeg' style={{width:'100%', height:'85vh'}}  />
      </Carousel.Item>
      <Carousel.Item>
        <img src='/image5.jpeg' style={{width:'100%', height:'85vh'}}  />
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Home
