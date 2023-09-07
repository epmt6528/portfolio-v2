import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    moji: {
      main: '#030D1B',
      sub: '#A09E9F',
    },
    solid: {
      main: '#DEDCDB',
    },
    brand: {
      main: '#4B95C2',
      mark: '#D8B189',
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
        background: '#ADB8D0',
        lineHeight: '1.4142135623',
        fontSize: 'base',
        letterSpacing: '0.08em',
        textAlign: 'justify',
        textJustify: 'inter-ideograph',
        fontFamily:
          '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "BIZ UDPGothic",Meiryo, sans-serif',
      },
      a: {
        color: 'brand.main',
      },
    },
  },
});
