'use client'

import React from 'react'
import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

import type { LogoSliderBlock as LogoSliderBlockProps } from '@/payload-types'

type Props = LogoSliderBlockProps & {
  className?: string
}

export const LogoSliderBlock: React.FC<Props> = (props) => {
  const { className, title, description, logos, backgroundColor = 'default' } = props

  return (
    <div className={cn('py-12', className)}>
      <div className="container">
        {title && (
          <h2
            className={cn('text-2xl font-bold mb-4 text-center', {
              'text-primary-foreground': backgroundColor === 'dark',
            })}
          >
            {title}
          </h2>
        )}

        {description && (
          <div className="mb-8 max-w-2xl mx-auto">
            <RichText
              data={description}
              enableGutter={false}
              className={cn({
                'text-primary-foreground': backgroundColor === 'dark',
              })}
            />
          </div>
        )}

        <div className="overflow-hidden">
          <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
            {logos?.map((logoItem, index) => {
              if (!logoItem.logo || typeof logoItem.logo === 'string') return null

              const LogoComponent = (
                <div key={index} className="w-24 md:w-32 h-16 flex items-center justify-center p-2">
                  <Media
                    resource={logoItem.logo}
                    imgClassName="max-h-full object-contain"
                    alt={logoItem.alt || ''}
                  />
                </div>
              )

              if (logoItem.link) {
                return (
                  <a
                    href={logoItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className="transition-opacity hover:opacity-80"
                  >
                    {LogoComponent}
                  </a>
                )
              }

              return LogoComponent
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
