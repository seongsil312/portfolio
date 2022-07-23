import { css, theme } from 'twind/css';

const globalStyles = css({
  ':global': {
    body: {
      'background-color': theme('backgroundColor.black'),
      color: theme('colors.white'),
    },
  },
});

export default globalStyles;
