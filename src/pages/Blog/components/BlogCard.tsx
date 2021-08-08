import React, { FC } from 'react';
import { Box, Button, Card, Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import ArrowRightAltOutlinedIcon from '@material-ui/icons/ArrowRightAltOutlined';
import AccessAlarmOutlinedIcon from '@material-ui/icons/AccessAlarmOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

type Props = {
  title: string;
  content: string;
  createdAt: string;
  readTime: string;
  likes: number;
  img?: string;
};

const useClasses = makeStyles(() => {
  return {
    card: {
      padding: 40,
    },
    textClamp: {
      display: '-webkit-box',
      maxWidth: 320,
      '-webkit-line-clamp': 3,
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
    },
    outlineButton: {
      borderRadius: 0,
      width: 152
    },
    img: {
      margin: 0,
      display: 'block',
      objectFit: 'cover'
    }
  }
})

const BlogCard: FC<Props> = ({ title, content, createdAt, readTime, likes, img = '' }) => {

  const classes = useClasses();

  return <Grid item md={img ? 12 : 4}>
    <Card className={!img ? classes.card : ''}>
      <Box display="flex" width="100%">
        {img && <img src={img} alt="" width="100%" height="300" className={classes.img} />}
        <Box width="100%" p={img ? 5 : 0}>
          <Box display="flex" flexDirection="column" mb={3}>
            <Box mb={2}>
              <Typography variant="h6">
                {title}
              </Typography>
            </Box>

            <Box mb={2}>
              <Typography variant="body2" className={classes.textClamp}>
                {content}
              </Typography>
            </Box>
            <Button variant="outlined" color="primary" className={classes.outlineButton}>
              <Box mr={2}>
                <Typography variant="body2">
                  READ MORE
                </Typography>
              </Box> <ArrowRightAltOutlinedIcon />
            </Button>
          </Box>
          <Box mb={3}>
            <Divider />
          </Box>
          <Box display="flex" justify-content="space-between" width="100%" alignItems="center">
            <Typography>
              {createdAt}
            </Typography>
            <Box display="flex" flexGrow={1} justifyContent="flex-end">
              <Box display="flex" alignItems="center" mr={2}>
                <Box mr={1}>
                  <AccessAlarmOutlinedIcon />
                </Box>
                <Typography>
                  {readTime}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Box mr={1}>
                  <FavoriteBorderOutlinedIcon />
                </Box>
                <Typography>
                  {likes}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  </Grid>
};

export default BlogCard
