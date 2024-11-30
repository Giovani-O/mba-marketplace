import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        heading: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'title-lg': ['28px', { lineHeight: '120%' }],
        'title-md': ['24px', { lineHeight: '120%' }],
        'title-sm': ['18px', { lineHeight: '120%' }],
        subtitle: ['16px', { lineHeight: '120%' }],
        'body-md': ['16px', { lineHeight: '120%' }],
        'body-sm': ['14px', { lineHeight: '120%' }],
        'body-xs': ['12px', { lineHeight: '120%' }],
        'label-md': ['12px', { lineHeight: '120%' }],
        'label-sm': ['10px', { lineHeight: '120%' }],
        'action-md': ['16px', { lineHeight: '120%' }],
        'action-sm': ['14px', { lineHeight: '120%' }],
      },
      fontWeight: {
        semibold: '600',
        medium: '500',
        regular: '400',
        bold: '700',
      },
      textTransform: {
        uppercase: 'uppercase',
      },
      colors: {
        orange: {
          base: 'var(--orange-base)',
          dark: 'var(--orange-dark)',
        },
        blue: {
          light: 'var(--blue-light)',
          base: 'var(--blue-base)',
          dark: 'var(--blue-dark)',
        },
        shape: {
          white: 'var(--white)',
          background: 'var(--background)',
          default: 'var(--shape)', // 'default' as an alias for 'shape'
        },
        gray: {
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
        },
        semantic: {
          danger: 'var(--danger)',
          success: 'var(--success)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
