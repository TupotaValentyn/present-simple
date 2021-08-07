import { Box, Button, CircularProgress, Grid, makeStyles, TextField, Theme, Typography } from '@material-ui/core';
import Travel from 'components/icons/Travel';
import React, { FC } from 'react';
import { useController, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCommonStyles } from 'common/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme: Theme) => ({
  travelIcon: {
    width: 80,
    height: 80
  },
  fieldWidth: {
    width: 496,
  },
  progress: {
    color: '#E4F6EF',
  },
  progressSize: {
    width: '88px !important',
    height: '88px !important',
    '& > svg > circle': {
      strokeWidth: 4
    }
  },
  circlesWrapper: {
    position: 'relative'
  },
  inner: {
    width: 72,
    height: 72,
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
  },
  mainValue: {
    fontWeight: 600,
    color: '#3EA279',
    fontSize: 18
  },
  diameter: {
    width: 100
  }
}));

const validationSchema = yup.object().shape({
  search: yup.string()
})

const defaultValues = { search: '' };


type Props = {
  progress: number;
  mainValue: number;
  of: number;
}

const CircleProgress: FC<Props> = ({ progress, mainValue, of }) => {
  const classes = useStyles()

  return <Box className={classes.circlesWrapper}>
    <CircularProgress variant="determinate" value={100}
                      classes={{ circle: classes.progress, root: classes.progressSize }}
    />

    <Box className={classes.inner}>
      <Box>
        <Box display="flex" justifyContent="center" mb={1}>
          <Typography className={classes.mainValue}>
            {mainValue}
          </Typography>
        </Box>
        <Typography>
          {`${mainValue}/${of}`}
        </Typography>
      </Box>
    </Box>
  </Box>
}

const AnaliseSearch = () => {
  const classes = useStyles();
  const commonClasses = useCommonStyles();
  const form = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema)
  })

  const {
    field: { ref, ...inputProps },
  } = useController({
    name: 'search',
    control: form.control,
    rules: { required: true },
    defaultValue: '',
  });


  const onSubmit = (formState: { search: string }) => {
    console.log(form.getValues())
  }

  return <Box display="flex" flexDirection="column" alignItems="center">
    <Box display="flex" justifyContent="center" mb={4}>
      <Travel className={classes.travelIcon} />
    </Box>

    <Box display="flex" flexDirection="column">
      <Box mb={3}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Box display="flex" alignItems="center">
            <Box mr={2}>
              <TextField variant="outlined" inputRef={ref} {...inputProps}
                         className={`${classes.fieldWidth} ${commonClasses.field}`} />
            </Box>

            <Button variant="contained" color="primary" type="submit" className={commonClasses.button}>
              Check
            </Button>
          </Box>
        </form>
      </Box>

      <Grid container>
        <Grid item>
          <Box mr={2}>
            <CircleProgress progress={70} mainValue={0} of={5} />
          </Box>
        </Grid>
        <Grid>
          <Alert severity="success" style={{ width: '100%' }}>This is a success alert — check it out!</Alert>
          <Box>

          </Box>
        </Grid>
      </Grid>
    </Box>
  </Box>
};

export default AnaliseSearch;
