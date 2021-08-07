import createBreakpoints, {
  BreakpointsOptions
} from '@material-ui/core/styles/createBreakpoints';

const breakpointsOptions: BreakpointsOptions = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values: {xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920}
};

const breakpoints = createBreakpoints(breakpointsOptions);

export default breakpoints;
