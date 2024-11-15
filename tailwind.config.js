/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,css,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          primaryTabColor: '#295da7',
          pageColor: '#ffffff',
          borderColor: '#bfcfdd',
          secondaryTabColor: '#e0eaf2',
          secondaryTabColorBorderColor: '#d6dde1',
          textColor: '#2d3435',
          primaryBgColor: '#feffff',
          carotRightColor: '#9fa6a6',
          navBarBgColor: '#295DA7',
          navBarItemBgColor: '#617598',
          blurColor: '#757575',
          buttonColor: '#6f48eb',
          borderColorNew: '#999',
          boxHeaderColor: '#6C8CB3',
          activeTabBorder: '#042f2e',
          grayButton: '#f4f4f4',
        },
      },
    },
  },
  plugins: [],
};
