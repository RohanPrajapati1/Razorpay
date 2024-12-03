/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    colors:{
      'primary-text':'#747786',
      'secondary-text':'#3061F4',
      'bg-primary':'#ffffff',
      'hover-primary':'#2950DA',
      'hover-secondary':'#C6E5FB',
      'from':'#EBF1FF',
      'to':'#E5F3FE'
    },
    extend: {
      spacing:{
        'heigth' : '87vh',
        'right':'43px'
      }
    },
  },
  plugins: [],
}

