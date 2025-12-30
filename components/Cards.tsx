'use client'

import { useCarouselStoreInstance } from "@/hooks/useCarouselStoreInstance"
import { ArrowRightIcon } from "@/icons"
import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"
import CarouselItem from "./carouselItem"
import Carousel from "./Carousel"
import CarouselDots from "./CarouselDots"

export const CardWithImage = ({ 
  title, 
  paragraf, 
  image, 
  href = "#",
  alt = "",
  dimension,
  ariaLabel,
  overlayIntensity = 'dark',
  showBadge = false,
  badgeText,
  metadata
}: CardWithImageProps) => {

  // Overlay gradients
  const overlayGradients = {
    light: 'bg-gradient-to-t from-black/40 via-transparent to-transparent',
    medium: 'bg-gradient-to-t from-black/70 via-black/30 to-transparent',
    dark: 'bg-gradient-to-t from-black/90 via-black/50 to-transparent'
  }

  return (
    <Link 
      href={href} 
      className={`group block w-fit ${dimension}`}
      aria-label={ariaLabel || `Baca artikel tentang ${title}`}
    >
      <div className={`
        relative rounded-xl overflow-hidden
        ${dimension}
        transition-all duration-500
      `}>
        {/* Image */}
        <div className="absolute inset-0">
          <img
            src={image}
            alt={alt || title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            width={400}
            height={600}
          />
        </div>
        
        {/* Overlay */}
        <div className={`absolute inset-0 ${overlayGradients[overlayIntensity]}`} />
        
        {/* Badge */}
        {showBadge && badgeText && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-black text-xs font-semibold px-3 py-1 rounded-full">
            {badgeText}
          </div>
        )}
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 text-white">
          {metadata && (
            <div className="text-xs text-white/70 mb-2 uppercase tracking-wider">
              {metadata}
            </div>
          )}
          <h3 className="text-lg md:text-xl font-bold line-clamp-2 mb-2">
            {title}
          </h3>
          {paragraf && (
            <p className="text-white/90 text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
              {paragraf}
            </p>
          )}

          {paragraf && (
            <div className="mt-3 text-xs text-white/70 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Baca selengkapnya →
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

export const ArticleCard = ({title, image, date, href, alt, ariaLabel, dimension, images}:ArticleCardProps) => {

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
  
    const carouselItems = useMemo(() => {
      // Pastikan ini mengembalikan array
      if (!images || images.length === 0) return [];
      
      return images.map((item, idx) => (
        <CarouselItem key={`carousel-item-${idx}`} onClick={() => {}}>
          <div className={`relative ${dimension}`}>
            <Image
              src={item}
              alt={`carousel-image-${idx}`}
              loading="lazy"
              decoding="async"
              fill // Untuk full cover
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </CarouselItem>
      ));
    }, [images]);

  return (
    <Link
      href={href}
      className={`group block ${dimension} cursor-pointer`}
      aria-label={ariaLabel || `Baca artikel tentang ${title}`}
    >
      <div className={`flex flex-col gap-3 ${dimension}`}>

        {images && images.length > 0 ? (
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

            <div className="absolute bottom-0 w-full h-10 flex items-center justify-center bg-linear-to-t from-black/90 to-transparent">
              <CarouselDots
                store={carouselStore}
                className="space-x-4"
                dotClassName="w-8 h-1 bg-white rounded-sm"
                activeDotClassName="w-8 h-1 bg-black rounded-sm"
                customCount={images?.length}
              />
            </div>
          </div>
        ) : (
          <div className={`relative overflow-hidden w-full h-full`}>
            <div className="absolute inset-0">
              {/* Image */}
              <Image
                src={image}
                alt={alt || title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={400}
                height={600}
              />
            </div>
          </div>
        )}
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