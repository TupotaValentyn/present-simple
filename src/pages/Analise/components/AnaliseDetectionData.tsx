import React, { FC } from 'react';
import { Box, List, ListItem, makeStyles, Theme, Typography } from '@material-ui/core';

type Props = {}

enum STATUSES {
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  DANGEROUS = 'DANGEROUS'
}

const data = [
  {
    serviceName: 'Bfore.Ai PreCrime',
    status: STATUSES.SUCCESS,
  }, {
    serviceName: 'ADMINUSLabs',
    status: STATUSES.SUCCESS,
  }, {
    serviceName: 'AlienVault',
    status: STATUSES.SUCCESS,
  }, {
    serviceName: 'Antiy-AVL',
    status: STATUSES.SUCCESS,
  }, {
    serviceName: 'Artists Against 419',
    status: STATUSES.SUCCESS,
  }
];

const useClasses = makeStyles((theme: Theme) => {
  return {
    item: {
      borderBottom: '1px solid #EBEBEB',
      padding: theme.spacing(2, 0)
    }
  }
});

const AnaliseDetectionData: FC<Props> = () => {

  const classes = useClasses();

  return <List>
    {data.map((item) => {
      return <ListItem className={classes.item}>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Typography>
            {item.serviceName}
          </Typography>
          <Box>
            ok
          </Box>
        </Box>
      </ListItem>
    })}
  </List>
};

export default AnaliseDetectionData
