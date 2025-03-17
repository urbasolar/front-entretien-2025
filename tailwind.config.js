/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,css}'],
  exclude: ['./src/themes/*.{css}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgba(var(--color-primary) / <alpha-value>)',
          800: 'rgba(var(--color-primary) / 0.8)',
          600: 'rgba(var(--color-primary) / 0.6)',
          500: 'rgba(var(--color-primary) / 0.5)',
          400: 'rgba(var(--color-primary) / 0.4)',
          200: 'rgba(var(--color-primary) / 0.2)',
          100: 'rgba(var(--color-primary) / 0.1)',
          50: 'rgba(var(--color-primary) / 0.05)',
        },
        neutral: {
          black: 'rgba(var(--color-neutral-black) / <alpha-value>)',
          gray: 'rgba(var(--color-neutral-gray) / <alpha-value>)',
        },
        dark: {
          DEFAULT: 'rgba(var(--color-dark-neutral-black) / <alpha-value>)',
          mid: 'rgba(var(--color-dark-neutral-gray) / <alpha-value>)',
          lighter: 'rgba(var(--color-dark-neutral-light-gray) / <alpha-value>)',
        },
        white: {
          DEFAULT: 'rgba(var(--color-white) / <alpha-value>)',
          800: 'rgba(var(--color-white) / 0.8)',
          600: 'rgba(var(--color-white) / 0.6)',
          500: 'rgba(var(--color-white) / 0.5)',
          400: 'rgba(var(--color-white) / 0.4)',
          200: 'rgba(var(--color-white) / 0.2)',
          100: 'rgba(var(--color-white) / 0.1)',
          50: 'rgba(var(--color-white) / 0.05)',
          30: 'rgba(var(--color-white) / 0.03)',
          10: 'rgba(var(--color-white) / 0.01)',
        },
        success: {
          DEFAULT: 'rgba(var(--color-success) / <alpha-value>)',
          700: 'rgba(var(--color-success) / 0.7)',
          400: 'rgba(var(--color-success) / 0.4)',
          200: 'rgba(var(--color-success) / 0.2)',
        },
        warning: {
          DEFAULT: 'rgba(var(--color-warning) / <alpha-value>)',
          700: 'rgba(var(--color-warning) / 0.7)',
          400: 'rgba(var(--color-warning) / 0.4)',
          200: 'rgba(var(--color-warning) / 0.2)',
        },
        carefull: {
          DEFAULT: 'rgba(var(--color-carefull) / <alpha-value>)',
          700: 'rgba(var(--color-carefull) / 0.7)',
          400: 'rgba(var(--color-carefull) / 0.4)',
          200: 'rgba(var(--color-carefull) / 0.2)',
        },
        danger: {
          DEFAULT: 'rgba(var(--color-danger) / <alpha-value>)',
          700: 'rgba(var(--color-danger) / 0.7)',
          400: 'rgba(var(--color-danger) / 0.4)',
          200: 'rgba(var(--color-danger) / 0.2)',
        },
        icon: {
          DEFAULT: 'rgba(var(--color-icon) / <alpha-value>)',
        },
      },
      fontSize: {
        l: 'var(--font-size-l)',
        m: 'var(--font-size-m)',
        s: 'var(--font-size-s)',
        xs: 'var(--font-size-xs)',
      },
      spacing: {
        xl: 'var(--spacing-xl)',
        l: 'var(--spacing-l)',
        m: 'var(--spacing-m)',
        s: 'var(--spacing-s)',
        xs: 'var(--spacing-xs)',
      },
      borderWidth: {
        6: '6px',
      },
    },
  },
  plugins: [],
}

