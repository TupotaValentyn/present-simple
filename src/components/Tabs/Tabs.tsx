import React, { FC } from 'react';
import { AppBar, Tab, Tabs as MUITabs } from '@material-ui/core';
import { useStyles } from 'pages/Analise/utils/styles';
import { a11yProps, TabProps } from 'utils/useTabs';

type Props = {
  tabs: TabProps[];
  tabState: number;
  setTabState: (tab: number) => void;
}

const Tabs: FC<Props> = ({ tabs, setTabState, tabState }) => {

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabState(newValue);
  };

  const renderTab = (tab: TabProps) => {
    return <Tab key={tab.value} label={tab.label} {...a11yProps(tab.value)} className={classes.tabPanel}
                classes={{ selected: classes.selected }} />
  }

  return <AppBar position="static" className={classes.appbar}>
    <MUITabs value={tabState}
             onChange={handleChange}
             aria-label="tabs"
             indicatorColor="primary"
             classes={{ flexContainer: classes.noPadding }}>
      {tabs.map(renderTab)}
    </MUITabs>
  </AppBar>
};

export default Tabs;
