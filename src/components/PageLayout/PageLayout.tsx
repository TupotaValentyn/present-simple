import React, { FC } from 'react';
import { Box, Typography } from '@material-ui/core';

type Props = {
  title: string;
};

const PageLayout: FC<Props> = ({ title, children }) => {
  return <Box pr="144px" pl="144px" pt={5}>
    <Box mb={4}>
      <Typography variant="h4">
        {title}
      </Typography>
    </Box>
    {children}
  </Box>
};

export default PageLayout;
