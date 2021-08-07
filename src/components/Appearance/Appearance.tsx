import React, { FC, useContext } from 'react';
import {
  useAppearanceValues,
  AppearanceProvider,
  getTheme,
  appearanceContext
} from 'context/appearance';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

const ThemeWrapper: FC = ({ children }) => {
  const { themeType } = useContext(appearanceContext);

  const theme = getTheme(themeType);

  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
}

const Appearance: FC = ({ children }) => {
  const value = useAppearanceValues();

  return <AppearanceProvider value={value}>
    <CssBaseline />
    <ThemeWrapper>
      {children}
    </ThemeWrapper>
  </AppearanceProvider>
};

export default Appearance;
