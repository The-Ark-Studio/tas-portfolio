import Grid from '@mui/material/Grid';

import {PROJECTS} from '@/constants/mock';
import {ProjectCard} from './components/ProjectCard';

const ProjectPage = () => {
  return (
    <Grid
      container
      p={4}
      // spacing={{xs: 0, md: 10}}
      sx={{
        height: '100%',
        overflow: 'auto',
        px: {xs: '14px', md: '10rem'},
        mb: {
          xs: '3rem',
          md: '0',
        },
        backgroundColor: '#101B25',
      }}
    >
      {PROJECTS.map((item) => {
        return <ProjectCard key={item.id} item={item} />;
      })}
    </Grid>
  );
};

export default ProjectPage;
