import React, { FC } from 'react';
import { Box, List, ListItem, makeStyles, Theme, Typography } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

type Props = {
  data: any[];
}

enum STATUSES {
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  DANGEROUS = 'DANGEROUS'
}

// const data = [
//   {
//     serviceName: 'Bfore.Ai PreCrime',
//     status: STATUSES.SUCCESS,
//   }, {
//     serviceName: 'ADMINUSLabs',
//     status: STATUSES.SUCCESS,
//   }, {
//     serviceName: 'AlienVault',
//     status: STATUSES.SUCCESS,
//   }, {
//     serviceName: 'Antiy-AVL',
//     status: STATUSES.SUCCESS,
//   }, {
//     serviceName: 'Artists Against 419',
//     status: STATUSES.SUCCESS,
//   }
// ];

const useClasses = makeStyles((theme: Theme) => {
  return {
    item: {
      borderBottom: '1px solid #EBEBEB',
      padding: theme.spacing(2, 0)
    }
  }
});

const AnaliseDetectionData: FC<Props> = ({ data }) => {

  const item = data?.[0];

  const url = item?.url;
  const status = item?.status;
  const hasError = status === STATUSES.DANGEROUS;
  const checkSites = item?.data;

  const classes = useClasses();

  console.log(data);

  return <List>
    {checkSites.map((item: any) => {
      return <ListItem className={classes.item}>
        <Box display="flex" justifyContent="space-between" width="100%">
          <Typography>
            {item.serviceName}
          </Typography>
          <Box>
            {hasError ? <Box display="flex" alignItems="center">
              <Box mr={1}>
                <CloseIcon color="error" />
              </Box>
              Error
            </Box> : <Box display="flex" alignItems="center">
              <Box mr={1}>
                <DoneIcon color="primary" />
              </Box>
              Clen
            </Box>}
          </Box>
        </Box>
      </ListItem>
    })}
  </List>
};

export default AnaliseDetectionData
