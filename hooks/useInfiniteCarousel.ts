// hooks/useInfiniteCarousel.ts
import { useCarouselStore } from '@/lib/zustand/store'
import { useCallback } from 'react'

export const useInfiniteCarousel = () => {
  const { currentIndex, totalSlides, nextSlide, prevSlide } = useCarouselStore()

  const getRealIndex = useCallback((index: number) => {
    if (totalSlides === 0) return 0
    return ((index % totalSlides) + totalSlides) % totalSlides
  }, [totalSlides])

  const handleNext = useCallback(() => {
    nextSlide()
  }, [nextSlide])

  const handlePrev = useCallback(() => {
    prevSlide()
  }, [prevSlide])

  const goToRealSlide = useCallback((index: number) => {
    useCarouselStore.getState().goToSlide(index)
  }, [])

  return {
    currentIndex,
    realIndex: getRealIndex(currentIndex),
    totalSlides,
    handleNext,
    handlePrev,
    goToRealSlide,
    getRealIndex
  }
}