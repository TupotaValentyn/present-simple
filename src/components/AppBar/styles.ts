import { makeStyles, Theme } from '@material-ui/core';

export const useClasses = makeStyles((theme: Theme) => {
  return {
    appBar: {
      zIndex: 999,
      background: theme.palette.common.white,
      boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.12)'
    },
    toolbar: {
      display: 'flex',
    },
    logo: {
      marginRight: 16,
    },
    navigations: {
      flexGrow: 1
    },
    navList: {
      display: 'flex',
      gap: 16,
      listStyle: 'none'
    },
    noDecoration: {
      textDecoration: 'none'
    }
  }
})
