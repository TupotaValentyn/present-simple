import { Palette } from '@material-ui/core/styles/createPalette';
import createTypography, { TypographyOptions, Typography } from '@material-ui/core/styles/createTypography';

const BASE_FONT_FAMILY = 'Roboto, sans-serif';

export const typographyOptions = (palette: Palette): TypographyOptions => ({
  htmlFontSize: 16,
  fontFamily: BASE_FONT_FAMILY,
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 400,
    fontSize: 96,
    lineHeight: 1.2,
    color: palette.common.black,
  },
  h2: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 400,
    fontSize: 60,
    lineHeight: 1.2,
    color: palette.common.black
  },
  h3: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 400,
    fontSize: 48,
    lineHeight: 1.2,
    color: palette.common.black,
  },
  h4: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 400,
    fontSize: 34,
    lineHeight: 1.2,
    textTransform: 'initial',
  },
  h5: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 1.2,
    textTransform: 'initial',
  },
  h6: {
    fontFamily: BASE_FONT_FAMILY,
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 1.2,
  },
  subtitle1: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 1.2,
  },
  subtitle2: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 1.2,
  },
  body1: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.2
  },
  body2: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1.2,
    color: palette.common.black
  },
  caption: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 1.2,
    color: palette.common.black,
    textTransform: 'initial'
  },
  button: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 1.2
  },
  overline: {
    fontFamily: BASE_FONT_FAMILY,
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 1.2,
    color: palette.common.black,
    textTransform: 'uppercase'
  }
});

const typography = (palette: Palette): Typography => createTypography(palette, typographyOptions);

export default typography;

