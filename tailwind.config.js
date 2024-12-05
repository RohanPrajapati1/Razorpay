/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    colors:{
      'primary-text':'#747786',
      'secondary-text':'#3061F4',
      'bg-primary':'#ffffff',
      'bg-secondary':'#F3F7F8',
      'hover-primary':'#0000EE',
      'hover-secondary':'#EDF0FF',
      'from':'#EBF1FF',
      'to':'#E8F5FD'
    },
    extend: {
      spacing:{
        'heigth' : '87vh',
        'right':'43px',
        'weight':'93vw'
      },
      animation:{
        move: "move 20s linear infinite",
      },
      keyframes:{
        move:{
          "0%":{
            transform: "translateX(0)",
        },
          "100%":{
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
}

