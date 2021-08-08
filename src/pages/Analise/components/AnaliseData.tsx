import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { Tabs } from 'components';
import { useTabs } from 'utils/useTabs';
import TabPanel from 'components/TabPanel';
import AnaliseDetectionData from 'pages/Analise/components/AnaliseDetectionData';

type Props = {};

const tabs = [
  { value: 0, label: 'DETECTION' },
  { value: 1, label: 'DETAILS' },
  { value: 2, label: 'COMMENTS' },
];

const AnaliseData: FC<Props> = () => {

  const tabsProps = useTabs(tabs);

  return <Box>
    <Tabs {...tabsProps} />
    <TabPanel value={tabsProps.tabState} index={0}>
      <AnaliseDetectionData />
    </TabPanel>
  </Box>;
};

export default AnaliseData;
