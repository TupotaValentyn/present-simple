import React, { FC } from 'react';
import { PageLayout } from 'components';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Box, Card, CardContent, CardHeader, Grid, makeStyles, Typography } from '@material-ui/core';
import Chart from 'react-apexcharts'
import mainImage from 'main.png';

type Props = {}

const useClasses = makeStyles(() => {
  return {
    icon: {
      width: 30,
      height: 30
    },
    marginRight: {
      marginRight: 16,
    },
    marginBottom: {
      marginRight: 16,
    },
    mainCard: {
      padding: 40,
      height: 192,
      overflow: 'visible'
    },
    mainImageWrapper: {
      width: 300,
      position: 'relative',
      '& > img': {
        position: 'absolute',
        top: -100
      }
    }
  }
});

const Dashboard: FC<Props> = () => {

    const classes = useClasses();

    const donutOptions: any = {
      labels: ['Instagram', 'Facebook', 'Google', 'Linkedin'],
      markers: { colors: ['#29B6F6', '#01579B', '#29B6F6', '#81D4FA'] },
      fill: { colors: ['#29B6F6', '#01579B', '#29B6F6', '#81D4FA'] },
      dataLabels: {
        style: {
          colors: ['#fff', '#fff', '#fff', '#fff'],
          background: {
            dropShadow: 'none'
          }
        },
      },
      theme: {
        monochrome: {
          enabled: true,
          colors: ['#29B6F6', '#01579B', '#29B6F6', '#81D4FA']
        }
      }
    };

    const state = {
      series: [{
        name: 'Instagram',
        data: [1000, 800, 400, 800, 1000, 700]
      }, {
        name: 'Facebook',
        data: [100, 600, 1000, 900, 600, 400]
      }, {
        name: 'Google',
        data: [700, 200, 700, 600, 500, 800]
      }, {
        name: 'linkedin',
        data: [700, 200, 700, 600, 500, 800]
      }],
      options: {
        chart: {
          type: 'bar',
        },
        plotOptions: {
          bar: {
            // borderRadius: 4,
            orientation: 'vertical',
            columnWidth: 30,
            dataLabels: {
              position: 'top',
            },
          }
        },
        dataLabels: {
          enabled: false,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['transparent']
          }
        },
        stroke: {
          show: true,
          width: 1,
          colors: ['#fff']
        },
        tooltip: {
          shared: true,
          intersect: false
        },
        xaxis: {
          categories: ['Jan', ' Feb', 'Mar', 'Apr', 'May', 'May'],
        },
        theme: {
          monochrome: {
            enabled: true,
            colors: ['#29B6F6', '#01579B', '#29B6F6']
          }
        }
      },
    };

    return <PageLayout title="Dashboard" icon={<DashboardIcon className={classes.icon} />}>
      <Box mb={2}>
        <Grid container>
          <Grid item md={12}>
            <Card className={classes.mainCard}>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography variant="h3">
                    Hello, Ann!
                  </Typography>
                  <Box>
                    <Typography>
                      Collaborate for a safer Internet
                    </Typography>
                    <Typography>
                      Let's make the Internet safe for everyone by joint efforts!
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.mainImageWrapper}>
                  <img src={mainImage} alt="maine image" />
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid item md={8}>
          <Card>
            <Box mr={2}>
              <CardHeader>Statistics</CardHeader>
              <Chart options={state.options as any} series={state.series} type="bar" height={320} width="100%" />
            </Box>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card>
            <CardHeader>Statistics</CardHeader>
            <CardContent>
              <Chart options={{ ...donutOptions }} type="donut"
                     series={[24, 38, 30, 8]}
                     width={360} height={292}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PageLayout>;
  }
;

export default Dashboard;
