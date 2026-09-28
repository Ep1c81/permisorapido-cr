/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(calc(var(--dir, 1) * 32px))' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        shimmer: { '100%': { transform: 'translateX(100%)' } }
      },
      animation: {
        slideIn: 'slideIn .38s cubic-bezier(.22,1,.36,1) both',
        floatY: 'floatY 6s ease-in-out infinite',
        shimmer: 'shimmer 2.4s infinite'
      }
    }
  }
};
