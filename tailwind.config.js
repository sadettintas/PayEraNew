/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0097A7',  // Ana renk (turkuaz)
        'primary-dark': '#007C91', // Koyu turkuaz (navbar, başlıklar)
        'primary-light': '#00ACC1', // Hover için daha açık ton
        'bg-light': '#F4F6F7', // Arka plan rengi
        'bg-alt': '#FAFAFA', // Alternatif arka plan rengi
        'text-heading': '#263238', // Başlık rengi
        'text-body': '#546E7A', // Metin rengi
        'accent': '#FFB300', // Vurgu rengi (CTA butonları)
        'accent-dark': '#F57C00', // Koyu accent rengi
        'accent-light': '#FFCA28', // Açık accent rengi
        
        // Geriye dönük uyumluluk için eski renkleri de tutuyoruz
        'navy': '#0097A7',
        'navy-dark': '#007C91',
        'turquoise': '#0097A7',
        'turquoise-dark': '#007C91',
        'light-gray': '#F4F6F7',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fadeIn': 'fadeIn 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.9' },
        },
      },
      blur: {
        '3xl': '64px',
      },
    },
  },
  plugins: [],
}

