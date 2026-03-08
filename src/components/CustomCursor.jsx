import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Mover el cursor con el mouse
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    // Detectar hover sobre elementos interactivos
    const handleMouseOver = (e) => {
      const target = e.target
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.getAttribute('role') === 'button' ||
        target.closest('a') ||
        target.closest('button')
      
      if (isInteractive) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e) => {
      const target = e.target
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.getAttribute('role') === 'button' ||
        target.closest('a') ||
        target.closest('button')
      
      if (isInteractive) {
        setIsHovering(false)
      }
    }

    // Agregar event listeners
    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <div 
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  )
}

export default CustomCursor