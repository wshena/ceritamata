'use client'

import React, { useState, useMemo } from 'react'
import Carousel from './Carousel';
import { SpotlightItems } from '@/const';
import { CardWithImage } from './Cards';
import CarouselItem from './carouselItem';
import CarouselButton from './CarouselButton';
import { useCarouselStoreInstance } from '@/hooks/useCarouselStoreInstance';
import { AngleLeftIcon, AngleRightIcon } from '@/icons';

const SpotlightCarousel = () => {
  
  const [config] = useState<CarouselConfig>({
    itemsPerView: 4,
    scrollBy: 1,
    slideWidth: 400,
    infinite: true,
    autoPlay: true,
    showDots: false,
  });

  const { store: carouselStore } = useCarouselStoreInstance(
      'spotlight-carousel', // ID unik untuk store ini
      {
        itemsPerView: config.itemsPerView,
        scrollBy: config.scrollBy,
        infinite: config.infinite,
      }
    );

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
    <div className='flex flex-col gap-5'>
      {/* desktop */}
      <div className='hidden lg:block'>
        <Carousel
          store={carouselStore}
          itemsPerView={config.itemsPerView}
          scrollBy={config.scrollBy}
          slideWidth={config.slideWidth}
          infinite={config.infinite}
          autoPlay={config.autoPlay}
          autoPlayInterval={3000}
          gap={24}
          className=""
        >
          {carouselItems}
        </Carousel>
      </div>

      {/* tablet */}
      <div className='hidden md:block lg:hidden'>
        <Carousel
          store={carouselStore}
          itemsPerView={3}
          scrollBy={config.scrollBy}
          slideWidth={300}
          infinite={config.infinite}
          autoPlay={config.autoPlay}
          autoPlayInterval={3000}
          gap={24}
          className=""
        >
          {carouselItems}
        </Carousel>
      </div>

      {/* mobile */}
      <div className='block md:hidden'>
        <Carousel
          store={carouselStore}
          itemsPerView={1}
          scrollBy={config.scrollBy}
          slideWidth={300}
          infinite={config.infinite}
          autoPlay={config.autoPlay}
          autoPlayInterval={3000}
          gap={24}
          className=""
        >
          {carouselItems}
        </Carousel>
      </div>

      {/* carousel button */}
      <div className="flex items-center gap-4">
        <CarouselButton
          direction="prev"
          store={carouselStore}
          className="p-2 rounded-full cursor-pointer hover:bg-white/30 flex items-center justify-center"
        >
          <AngleLeftIcon size={25} color="white" />
        </CarouselButton>

        <CarouselButton
          direction="next"
          store={carouselStore}
          className="p-2 rounded-full cursor-pointer hover:bg-white/30 flex items-center justify-center"
        >
          <AngleRightIcon size={25} color="white" />
        </CarouselButton>
      </div>
    </div>
  )
}

export default SpotlightCarousel;