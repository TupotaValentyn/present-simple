import React from 'react';

export type TabProps = {
  value: number;
  label: string;
}

export const useTabs = (tabs: TabProps[]) => {
  const [value, setValue] = React.useState(0);

  const setTabState = (newValue: number) => setValue(newValue);

  return { tabState: value, setTabState, tabs };
}

export function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
