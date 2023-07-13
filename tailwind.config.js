/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["navbar.html","login.html","cars.html","hh.html","coba.html","about.html","news.html","j.html"],
  darkMode:'class',
  theme: {
    container:{
      center : true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary:'#14b8a6',
        secondary: '#64748b',
        dark:'#020617',
      },
      screens :{
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

