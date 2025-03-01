'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

import type { ParallaxBlock as ParallaxBlockProps } from '@/payload-types'

type Props = ParallaxBlockProps & {
  className?: string
}

export const ParallaxBlock: React.FC<Props> = (props) => {
  const {
    className,
    title,
    subtitle,
    description,
    backgroundImage,
    textColor = 'light',
    textAlignment = 'center',
    height = 'medium',
  } = props

  const [scrollPosition, setScrollPosition] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const element = sectionRef.current
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0

        if (isVisible) {
          // Calculate how far the element is from the viewport center
          const distanceFromCenter = rect.top - window.innerHeight / 2
          // Adjust parallax speed here
          const parallaxOffset = distanceFromCenter * 0.2
          setScrollPosition(parallaxOffset)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Initial calculation
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Height classes based on selection
  const heightClasses = {
    small: 'h-[40vh]',
    medium: 'h-[60vh]',
    large: 'h-[80vh]',
    fullScreen: 'h-screen',
  }

  // Text alignment classes
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <div
      ref={sectionRef}
      className={cn('relative overflow-hidden', height ? heightClasses[height] : '', className)}
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollPosition}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {backgroundImage && typeof backgroundImage !== 'string' && (
          <Media
            resource={backgroundImage}
            imgClassName="w-full h-full object-cover"
            alt={title || 'Parallax background'}
          />
        )}
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div
        className={cn(
          'relative z-10 flex flex-col justify-center items-center h-full w-full px-4 md:px-8',
          textAlignment ? alignmentClasses[textAlignment] : '',
        )}
      >
        <div
          className={cn('max-w-4xl mx-auto', {
            'items-start': textAlignment === 'left',
            'items-center': textAlignment === 'center',
            'items-end': textAlignment === 'right',
          })}
        >
          <h2
            className={cn('text-4xl md:text-5xl lg:text-6xl font-bold mb-4', {
              'text-white': textColor === 'light',
              'text-gray-900': textColor === 'dark',
            })}
          >
            {title}
          </h2>

          {subtitle && (
            <h3
              className={cn('text-xl md:text-2xl mb-6', {
                'text-gray-200': textColor === 'light',
                'text-gray-700': textColor === 'dark',
              })}
            >
              {subtitle}
            </h3>
          )}

          {description && (
            <div
              className={cn('max-w-2xl mx-auto', {
                'text-gray-100': textColor === 'light',
                'text-gray-800': textColor === 'dark',
              })}
            >
              <RichText data={description} enableGutter={false} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
