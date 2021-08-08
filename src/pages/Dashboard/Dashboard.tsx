import React, { FC } from 'react';
import { PageLayout } from 'components';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Card, CardContent, makeStyles, CardHeader, Box, Grid } from '@material-ui/core';
import Chart from 'react-apexcharts'

type Props = {}

const useClasses = makeStyles(() => {
  return {
    icon: {
      width: 30,
      height: 30
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

              formatter: function (val: any, opts: any) {
                return val + 'sex'
              },
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
      <Grid container component={Card}>
        <Grid item>
          sdfsdf
        </Grid>
      </Grid>

      <Grid container>
        <Grid component={Card} md={8}>
          <CardHeader>Statistics</CardHeader>
          <Chart options={state.options as any} series={state.series} type="bar" height={320} width="100%" />
        </Grid>
        <Grid item component={Card}>
          <CardHeader>Statistics</CardHeader>
          <CardContent>
            <Chart options={{ ...donutOptions }} type="donut"
                   series={[24, 38, 30, 8]}
                   width={500} height={320}
            />
          </CardContent>
        </Grid>
      </Grid>
    </PageLayout>;
  }
;

export default Dashboard;
