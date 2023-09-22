import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    moji: {
      main: '#090b0e',
      sub: '#A09E9F',
    },
    solid: {
      main: '#FFFFFF',
    },
    brand: {
      main: '#4B95C2',
      mark: '#FF9000',
    },
    background: {
      main: '#ADB8D0',
    },
  },
  fontSizes: {
    xmini: '0.7em',
    mini: '0.8em',
    base: '16px',
    big: '1.2em',
  },
  borders: {
    main: '1px solid #DEDCDB',
  },
  styles: {
    global: {
      'html, body': {
        color: 'moji.main',
        background: 'background.main',
        letterSpacing: '0.08em',
        fontFamily: 'Montserrat, Arial, sans-serif',
      },
      body: {
        maxWidth: '1220px',
        margin: '0 auto',
        padding: '0 20px',
      },
      a: {
        color: 'brand.main',
      },
      h1: {
        fontWeight: 800,
        fontSize: '8rem',
        lineHeight: 1,
        letterSpacing: 1,
        color: 'solid.main',
      },
      h2: {
        fontWeight: 500,
        fontSize: '2.5rem',
        lineHeight: 1,
        letterSpacing: 0,
        color: 'solid.main',
        marginBottom: '50px',
        position: 'relative',
        '&::after': {
          content: '" "',
          width: '10%',
          position: 'absolute',
          bottom: '-20px',
          left: 0,
          borderBottom: 'solid 6px rgba(255, 87, 205, .5)',
          borderColor: 'brand.mark',
        },
      },
    },
  },
});
