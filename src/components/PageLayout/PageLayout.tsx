import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';

type Props = {
  title: string;
  icon?: React.ReactNode;
};

const PageLayout: FC<Props> = ({ title, children, icon }) => {
  return <Box pr="144px" pl="144px" pt={5}>
    <Box mb={4} display="flex" alignItems="flex-end">
      <Box mr={2}>
        {icon}
      </Box>
      <Box>
        <Typography variant="h4">
          {title}
        </Typography>
      </Box>
    </Box>
    {children}
  </Box>
};

export default PageLayout;
