import createPalette, { PaletteOptions } from '@material-ui/core/styles/createPalette';

const paletteOptions: PaletteOptions = {
  background: {
    default: 'white'
  },
  text: {
    primary: '#000'
  },
  primary: {
    main: '#01579B'
  },
  secondary: {
    main: '#616161'
  }
};

export const lightPalette = createPalette({ ...paletteOptions, type: 'light' });
export const darkPalette = createPalette({ ...paletteOptions, type: 'dark', primary: { main: '#424242' } });
