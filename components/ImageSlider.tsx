'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const ImageSlider: React.FC = () => {
  const images = ['/images/top-image.png', '/images/top-image-2.png', '/images/top-image-3.png']

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="relative w-full h-auto">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Image ${currentImageIndex + 1}`}
          width={800}
          height={600}
          className={cn('absolute h-auto transition-opacity duration-1000 ease-in-out', {
            'opacity-100': index === currentImageIndex,
            'opacity-0': index !== currentImageIndex,
          })}
        />
      ))}
    </div>
  )
}

export default ImageSlider
