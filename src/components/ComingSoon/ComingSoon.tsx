import React, { FC } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

type Props = {}

const ComingSoon: FC<Props> = () => {
  return <Card>
    <CardContent>
      <Typography variant="h4">
        Coming soon
      </Typography>
    </CardContent>
  </Card>
};

export default ComingSoon
