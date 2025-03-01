import React from 'react'
import { cn } from '@/utilities/ui'

import type { TitleContentBlock as TitleContentBlockProps } from '@/payload-types'

type Props = TitleContentBlockProps & {
  className?: string
}

export const TitleContentBlock: React.FC<Props> = (props) => {
  const {
    className,
    smallTitle,
    mainTitle,
    subtitle,
    alignment = 'center',
    backgroundColor = 'white',
    textColor = 'dark',
    size = 'medium',
  } = props

  // Background color classes
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-gray-900',
    primary: 'bg-primary',
  }

  // Text color classes
  const textClasses = {
    dark: 'text-gray-900',
    light: 'text-white',
    primary: 'text-primary',
  }

  // Text alignment classes
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  // Section padding based on size
  const sizeClasses = {
    small: 'py-12',
    medium: 'py-20',
    large: 'py-32',
  }

  // Small title styles
  const smallTitleClasses = cn('text-lg md:text-xl mb-4 text-background')

  // Main title styles
  const mainTitleClasses = cn(
    'text-4xl md:text-5xl lg:text-6xl font-bold mb-6',
    textClasses[textColor as keyof typeof textClasses],
  )

  // Subtitle styles
  const subtitleClasses = cn('text-xl md:text-2xl max-w-3xl mx-auto', {
    'text-gray-600': textColor === 'dark',
    'text-gray-200': textColor === 'light',
    'text-primary-foreground': textColor === 'primary',
  })

  return (
    <div
      className={cn(
        sizeClasses[size as keyof typeof sizeClasses],
        bgClasses[backgroundColor as keyof typeof bgClasses],
        alignmentClasses[alignment as keyof typeof alignmentClasses],
        className,
      )}
    >
      <div className="container px-4 mx-auto">
        <div
          className={cn('max-w-5xl mx-auto', {
            'mx-auto': alignment === 'center',
            'ml-0 mr-auto': alignment === 'left',
            'mr-0 ml-auto': alignment === 'right',
          })}
        >
          {smallTitle && <div className={smallTitleClasses}>{smallTitle}</div>}

          {mainTitle && <h1 className={mainTitleClasses}>{mainTitle}</h1>}

          {subtitle && <div className={subtitleClasses}>{subtitle}</div>}
        </div>
      </div>
    </div>
  )
}
