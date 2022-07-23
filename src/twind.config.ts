import { setup } from 'twind';
import * as colors from 'twind/colors';

setup({
  darkMode: 'class',
  hash: true,
  preflight: {
    '@import': `url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;900&display=swap')`,
  },
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Georgia', 'serif'],
    },
    extend: {
      fontFamily: {
        sans: 'Montserrat',
      },
      colors: {
        ...colors,
      },
      backgroundColor: {
        ...colors,
      },
      borderColor: {
        ...colors,
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
    },
  },
});
