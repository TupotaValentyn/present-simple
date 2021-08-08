import { ThemeOptions } from '@material-ui/core';
import typography, { typographyOptions } from './typography';
import { createTheme } from '@material-ui/core/styles';
import breakpoints from 'config/theme/breakpoints';
import { darkPalette, lightPalette } from 'config/theme/palette';

export const theme: ThemeOptions = {
  breakpoints,
  direction: 'ltr',
  typography: typographyOptions,
  overrides: {
    MuiButton: {
      root: {
        boxShadow: 'none',
        padding: '4px 16px',
        height: 32,
        textTransform: 'initial',
        whiteSpace: 'nowrap',
        minWidth: 120
      },
      containedPrimary: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none'
        }
      },
      sizeLarge: {
        height: 40,
        fontSize: 16
      },
      sizeSmall: {
        width: 128
      }
    },
    MuiTableCell: {

    },
    MuiTab: {},
    MuiTabs: {
      flexContainer: {}
    },
    MuiRadio: {
      root: {
        padding: '3px'
      }
    },
    MuiAppBar: {
      root: {
        zIndex: 10
      },
      colorDefault: {
        backgroundColor: 'transparent'
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: 12
      }
    }
  }
};

const lightTypography = typography(lightPalette);
export const lightTheme = createTheme({
  ...theme,
  typography: lightTypography,
  palette: lightPalette,
  overrides: {
    ...theme.overrides,
    MuiChip: {
      root: {
        color: lightPalette.common.white
      }
    },
    MuiTableCell: {
      root: {
        fontSize: lightTypography.body1.fontSize
      },
      head: {
        color: lightPalette.secondary.main
      }
    },
  }
});

const darkTypography = typography(darkPalette);
export const darkTheme = createTheme({
  ...theme,
  palette: darkPalette,
  overrides: {
    ...theme.overrides,
    MuiChip: {
      root: {
        color: darkPalette.common.white
      }
    },
    MuiTableCell: {
      root: {
        fontSize: darkTypography.body1.fontSize
      },
      head: {
        color: darkPalette.secondary.main
      }
    },
  }
});
