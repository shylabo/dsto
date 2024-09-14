import { useState } from 'react'

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered(true)
  }

  const handleHoverOut = () => {
    setIsHovered(false)
  }

  return {
    isHovered,
    handleHover,
    handleHoverOut,
  }
}

export default useHover
