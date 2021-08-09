import { PaletteType } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { darkTheme, lightTheme } from 'config/theme/theme';

type DefaultValues = {
  themeType: PaletteType;
  setThemeType: () => void;
};

const nullable = () => null;

const defaultValues: DefaultValues = {
  themeType: 'light',
  setThemeType: nullable
};

export const appearanceContext = React.createContext(defaultValues);

const APPEARANCE_CONTEXT_KEY = 'appearance';
const defaultLight = 'light'

export const useAppearanceValues = (): DefaultValues => {

  const [type, setType] = useState<PaletteType>(window.localStorage.getItem(APPEARANCE_CONTEXT_KEY) as PaletteType);

  const setThemeType = () => {
    setType((prevType) => {
      const nextType = isLight(prevType) ? 'dark' : 'light'
      window.localStorage.setItem(APPEARANCE_CONTEXT_KEY, nextType);
      return nextType;
    });
  };

  return { themeType: type, setThemeType };
};

export const isLight = (type: PaletteType) => type === defaultLight;

export const useThemeType = () => {
  const { themeType } = useContext(appearanceContext);

  return isLight(themeType) ? lightTheme : darkTheme;
}

export const getTheme = (type: PaletteType) => {
  return isLight(type) ? lightTheme : darkTheme;
};


export const { Provider: AppearanceProvider, Consumer: AppearanceConsumer } = appearanceContext;
