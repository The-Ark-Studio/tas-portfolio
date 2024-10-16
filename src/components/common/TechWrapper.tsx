import { ICONS, TIconKey } from '@/assets/icons';
import { ITechs } from '@/types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TechIcon from './TechIcon';

function TechWrapper(props: { stack: ITechs[] }) {
  const { stack } = props ?? {};

  return (
    <Grid
      container
      spacing={2}
      sx={{ paddingTop: '20px', paddingX: { lg: 6 } }}>
      {stack.map((tech) => {
        const { icon, name } = tech ?? {};

        if (!icon || !name) {
          return null;
        }
        const iconKey = icon.toUpperCase() as TIconKey;
        const iconData = ICONS[iconKey] || ICONS['SOFTWARE'];

        return (
          <Grid item key={tech.name} xs={4} sm={4} md={3} lg={2}>
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
              }}>
              <TechIcon
                height={80}
                icon={iconData.src}
                name={name}
                width={80}
              />
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default TechWrapper;
