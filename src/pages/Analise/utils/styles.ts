import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    backgroundColor: theme.palette.background.paper,
    '& > [role="tabpanel"]': {
      '& > div': {
        padding: 0
      }
    }
  },
  appbar: {
    width: 'fit-content',
    position: 'relative',
    top: -50,
    boxShadow: 'none'
  },
  travelIcon: {
    width: 80,
    height: 80
  },
  selected: {
    '& > .MuiTab-wrapper': {
      color: `${theme.palette.primary.main} !important`
    }
  },
  noPadding: {
    padding: 0
  },
  tabPanel: {
    opacity: 1,
    background: 'white',
    '& > .MuiTab-wrapper': {
      color: theme.palette.secondary.main
    },
  }
}));
