'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import { cn } from '@/lib/utils'
import { mainHeight } from './styles'

const ImageSlider: React.FC = () => {
  const images = [
    '/images/top-image-1.jpeg',
    '/images/top-image-2.jpeg',
    '/images/top-image-3.jpeg',
    '/images/top-image-4.jpeg',
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(intervalId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={cn('relative w-full lg:h-full', mainHeight)}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Image ${currentImageIndex + 1}`}
          fill
          className={cn('absolute object-cover transition-opacity duration-3000 ease-in-out', {
            'opacity-100': index === currentImageIndex,
            'opacity-0': index !== currentImageIndex,
          })}
        />
      ))}
    </div>
  )
}

export default ImageSlider
