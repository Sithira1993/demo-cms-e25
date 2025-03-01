import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const TitleContentBlock: Block = {
  slug: 'titleContentBlock',
  interfaceName: 'TitleContentBlock',
  fields: [
    {
      name: 'smallTitle',
      type: 'text',
      label: 'Small Title (Optional)',
      required: false,
    },
    {
      name: 'mainTitle',
      type: 'text',
      label: 'Main Title',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Subtitle',
      required: false,
    },
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'center',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Center',
          value: 'center',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
      label: 'Text Alignment',
    },
    {
      name: 'backgroundColor',
      type: 'select',
      defaultValue: 'white',
      options: [
        {
          label: 'White',
          value: 'white',
        },
        {
          label: 'Light',
          value: 'light',
        },
        {
          label: 'Dark',
          value: 'dark',
        },
        {
          label: 'Primary',
          value: 'primary',
        },
      ],
      label: 'Background Color',
    },
    {
      name: 'textColor',
      type: 'select',
      defaultValue: 'dark',
      options: [
        {
          label: 'Dark',
          value: 'dark',
        },
        {
          label: 'Light',
          value: 'light',
        },
        {
          label: 'Primary',
          value: 'primary',
        },
      ],
      label: 'Text Color',
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'medium',
      options: [
        {
          label: 'Small',
          value: 'small',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'Large',
          value: 'large',
        },
      ],
      label: 'Section Size',
    },
  ],
  labels: {
    singular: 'Title Content Block',
    plural: 'Title Content Blocks',
  },
}
