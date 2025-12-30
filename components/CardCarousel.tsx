'use client'

import { ArrowRightIcon } from "@/icons"
import Image from "next/image"
import { useMemo, useState } from "react"
import CarouselItem from "./carouselItem"
import Carousel from "./Carousel"
import { useCarouselStoreInstance } from "@/hooks/useCarouselStoreInstance"
import Link from "next/link"
import CarouselDots from "./CarouselDots"

const imageItems = [
  '/images/semi-private-beach/semi-private-beach1.jpeg',
  '/images/semi-private-beach/semi-private-beach2.jpeg',
  '/images/semi-private-beach/semi-private-beach3.jpeg',
  '/images/semi-private-beach/semi-private-beach4.jpeg',
  '/images/semi-private-beach/semi-private-beach5.jpeg',
  '/images/semi-private-beach/semi-private-beach6.jpeg'
]

export const CardCarousel = ({ 
  title, 
  image, 
  href = "#",
  alt = "",
  date = "",
  dimension,
  ariaLabel,
}: ArticleCardProps) => {

  const [config] = useState<CarouselConfig>({
    itemsPerView: 1,
    scrollBy: 1,
    slideWidth: dimension?.includes('h-') ? 400 : 600,
    gap: 0,
    infinite: true,
    autoPlay: true,
    showDots: false,
    showButtons: false,
    autoPlayInterval: 3000,
  });


  const { store: carouselStore } = useCarouselStoreInstance(
    'card-carousel', // ID unik untuk store ini
    {
      itemsPerView: config.itemsPerView,
      scrollBy: config.scrollBy,
      infinite: config.infinite,
    }
  );

  const carouselItems = useMemo(() => (
    imageItems.map((item, idx) => (
      <CarouselItem key={`carousel-item-${idx}`} onClick={() => {}}>
        <div className={`relative ${dimension}`}>
          <Image
            src={item}
            alt={`carousel-image-${idx}`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            width={400}
            height={600}
          />
        </div>
      </CarouselItem>
    ))
  ), [imageItems]);

  return (
    <Link 
      href={href}
      className={`group block ${dimension} cursor-pointer`}
      aria-label={ariaLabel || `Baca artikel tentang ${title}`}
    >
      <div className={`flex flex-col gap-3 ${dimension}`}>
        <div className={`relative overflow-hidden w-full h-full`}>
          <Carousel
            store={carouselStore}
            itemsPerView={3}
            scrollBy={1}
            slideWidth={dimension?.includes('h-') ? 400 : 600}
            gap={24}
            infinite={true}
            autoPlay={true}
          >
            {carouselItems}
          </Carousel>

          <div className="absolute bottom-0 w-full h-10 flex items-center justify-center bg-linear-to-t from-black/50 to-transparent">
            <CarouselDots
              store={carouselStore}
              className="space-x-4"
              dotClassName="w-8 h-1 bg-white rounded-sm"
              activeDotClassName="w-8 h-1 bg-white/80 rounded-sm"
              customCount={imageItems?.length}
            />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[.9rem] text-[#333]">{date}</span>
          <span className="uppercase text-[1rem] font-bold">{title}</span>
          <div className="flex items-center gap-2">
            <span className="uppercase text-[.9rem] tracking-wide">read more</span>
            <ArrowRightIcon size={10} color="black" />
          </div>
        </div>
      </div>
    </Link>
  )
}
