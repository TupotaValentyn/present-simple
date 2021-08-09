import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { ComingSoon, Tabs } from 'components';
import { useTabs } from 'utils/useTabs';
import TabPanel from 'components/TabPanel';
import AnaliseDetectionData from 'pages/Analise/components/AnaliseDetectionData';

type Props = {
  data: any[];
};

const tabs = [
  { value: 0, label: 'DETECTION' },
  { value: 1, label: 'DETAILS' },
  { value: 2, label: 'COMMENTS' },
];

const AnaliseData: FC<Props> = ({ data }) => {

  const tabsProps = useTabs(tabs);

  return <Box>
    <Tabs {...tabsProps} />
    <TabPanel value={tabsProps.tabState} index={0}>
      <AnaliseDetectionData data={data} />
    </TabPanel>
    <TabPanel value={tabsProps.tabState} index={1}>
      <ComingSoon />
    </TabPanel>
    <TabPanel value={tabsProps.tabState} index={2}>
      <ComingSoon />
    </TabPanel>
  </Box>;
};

export default AnaliseData;
