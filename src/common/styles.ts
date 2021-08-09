import { makeStyles } from '@material-ui/core';

export const useCommonStyles = makeStyles(() => {
  return {
    button: {
      borderRadius: 0,
      height: 40
    },
    field: {
      '& > .MuiInputBase-root': {
        borderRadius: 0,
        height: 40
      }
    }
  }
})
