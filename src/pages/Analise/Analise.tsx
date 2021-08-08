import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { PageLayout, Tabs } from 'components';
import AnaliseSearch from 'pages/Analise/components/Search';
import { useStyles } from './utils/styles';
import { useTabs } from 'utils/useTabs';
import TabPanel from 'components/TabPanel';
import Check from 'components/icons/Check';

type Props = {}

const tabs = [{
  value: 0,
  label: 'SEARCH'
}, {
  value: 1,
  label: 'FILE'
}, {
  value: 2,
  label: 'URL'
}];

const Analise: FC<Props> = () => {

  const tabsProps = useTabs(tabs);

  const classes = useStyles();

  return <PageLayout title="Analyze" icon={<Check />}>
    <Box pr={23} pl={23} pt={8}>
      <div className={classes.root}>
        <Tabs {...tabsProps} />
        <TabPanel value={tabsProps.tabState} index={0}>
          <AnaliseSearch />
        </TabPanel>
        <TabPanel value={tabsProps.tabState} index={1}>FILE</TabPanel>
        <TabPanel value={tabsProps.tabState} index={2}>URL</TabPanel>
      </div>
    </Box>
  </PageLayout>
};

export default Analise;
