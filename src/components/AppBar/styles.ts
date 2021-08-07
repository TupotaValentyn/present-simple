import { makeStyles } from '@material-ui/core';

export const useClasses = makeStyles(() => {
  return {
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
