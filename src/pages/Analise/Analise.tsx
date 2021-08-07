import React, { FC } from 'react';
import { AppBar, Box, makeStyles, Tab, Tabs, Theme, Typography } from '@material-ui/core';
import { PageLayout } from 'components';
import AnaliseSearch  from 'pages/Analise/components/Search';

type Props = {}

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
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
    top: -48
  },
  travelIcon: {
    width: 80,
    height: 80
  },
  noPadding: {
    padding: 0
  },
  tabPanel: {
    '& > div': {
      padding: 0,
    }
  }
}));

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Analise: FC<Props> = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return <PageLayout title="Analise">
    <Box pr={23} pl={23} pt={8}>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor="primary"
                classes={{ flexContainer: classes.noPadding }}>
            <Tab label="SEARCH" {...a11yProps(0)} />
            <Tab label="FILE" {...a11yProps(1)} />
            <Tab label="URL" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <AnaliseSearch />
        </TabPanel>
        <TabPanel value={value} index={1}>FILE</TabPanel>
        <TabPanel value={value} index={2}>URL</TabPanel>
      </div>
    </Box>
  </PageLayout>
};

export default Analise;
