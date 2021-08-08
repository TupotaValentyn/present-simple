import React, { FC, useContext } from 'react';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { appearanceContext, isLight } from 'context/appearance';
import { useClasses } from './styles';

const ThemeToggler: FC = () => {
  const classes = useClasses();
  const { setThemeType, themeType } = useContext(appearanceContext);

  return isLight(themeType) ? <Brightness3Icon className={classes.icon} onClick={setThemeType} /> :
    <Brightness7Icon className={classes.icon} onClick={setThemeType} />;
};

export default ThemeToggler
