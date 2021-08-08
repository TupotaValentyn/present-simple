import React, { FC } from 'react';
import { PageLayout } from 'components';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { makeStyles } from '@material-ui/core';

type Props = {}

const useClasses = makeStyles(() => {
  return {
    icon: {
      width: 30,
      height: 30
    }
  }
})

const Dashboard: FC<Props> = () => {

  const classes = useClasses();

  return <PageLayout title="Dashboard" icon={<DashboardIcon className={classes.icon} />}>
    <div>228</div>
  </PageLayout>;
};

export default Dashboard;
