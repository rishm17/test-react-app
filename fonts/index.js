import { Global } from '@emotion/react'

const Fonts = () => (
    <Global
      styles={`
        /* latin */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: normal;
          font-display: swap;
          src: url('./fonts/poppins.woff2') format('woff2'), url('./fonts/poppins.woff') format('woff');
          
        }
        /* latin */
        @font-face {
          font-family: 'sans-serif';
          font-style: normal;
          font-weight: normal;
          font-display: swap;
          src: url('./fonts/sans-serif.woff2') format('woff2'), url('./fonts/sans-serif.woff') format('woff');
         
        }
        `}
    />
  )
  
  export default Fonts