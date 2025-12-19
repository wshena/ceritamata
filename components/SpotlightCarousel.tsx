'use client'

import React, { useState, useMemo } from 'react'
import Carousel from './Carousel';
import { SpotlightItems } from '@/const';
import { CardWithImage } from './Cards';
import CarouselItem from './carouselItem';

const SpotlightCarousel = () => {
  const [activeConfig] = useState({
    itemsPerView: 4,
    scrollBy: 1,
    slideWidth: 400,
    infinite: true,
    autoPlay: true,
  });

  const carouselItems = useMemo(() => (
    SpotlightItems.map((item) => (
      <CarouselItem key={item.id} onClick={() => {}}>
        <CardWithImage 
          key={item.id} 
          {...item} 
          dimension="w-70 lg:w-100 h-90 lg:h-150" 
        />
      </CarouselItem>
    ))
  ), [SpotlightItems]);

  return (
    <>
      {/* desktop */}
      <div className='hidden lg:block'>
        <Carousel
          itemsPerView={activeConfig.itemsPerView}
          scrollBy={activeConfig.scrollBy}
          slideWidth={activeConfig.slideWidth}
          infinite={activeConfig.infinite}
          autoPlay={activeConfig.autoPlay}
          autoPlayInterval={3000}
          showDots={false}
          showButtons={true}
          gap={24}
          className=""
        >
          {carouselItems}
        </Carousel>
      </div>

      {/* tablet */}
      <div className='hidden md:block lg:hidden'>
        <Carousel
          itemsPerView={3}
          scrollBy={activeConfig.scrollBy}
          slideWidth={300}
          infinite={activeConfig.infinite}
          autoPlay={activeConfig.autoPlay}
          autoPlayInterval={3000}
          showDots={false}
          showButtons={true}
          gap={24}
          className=""
        >
          {carouselItems}
        </Carousel>
      </div>

      {/* mobile */}
      <div className='block md:hidden'>
        <Carousel
          itemsPerView={1}
          scrollBy={activeConfig.scrollBy}
          slideWidth={300}
          infinite={activeConfig.infinite}
          autoPlay={activeConfig.autoPlay}
          autoPlayInterval={3000}
          showDots={false}
          showButtons={true}
          gap={24}
          className=""
        >
          {carouselItems}
        </Carousel>
      </div>
    </>
  )
}

export default SpotlightCarousel;