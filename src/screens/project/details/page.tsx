'use client';
import TechWrapper from '@/components/common/TechWrapper';
import { PROJECTS } from '@/constants/mock';
import { IProject } from '@/types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { CustomDivider, ImageHover } from '@/components';
import DetailButton from '@/components/common/DetailButton';
import ImageWrapper from '@/components/common/ImageWrapper';
import { ProjectCard } from '../components/ProjectCard';

const ProjectDetailPage = () => {
  const pathname = usePathname();
  const params = useParams();
  const projectId = +params?.id;

  const [project, setProject] = useState<IProject | null>(null);

  useEffect(() => {
    const projectHolder = PROJECTS.find((ele) => ele?.id === projectId);

    if (!projectHolder) {
      return;
    }

    setProject(projectHolder);
  }, [pathname, projectId]);

  return (
    <Grid
      container
      p={4}
      spacing={{ xs: 0, md: 10 }}
      sx={{
        height: '100%',
        overflow: 'auto',
        px: { xs: '1rem', lg: '10rem' },
      }}>
      {project && (
        <Grid container item xs={12}>
          <Grid item xs={12}>
            <Grid
              container
              item
              sx={{
                overflow: 'hidden',
                position: 'relative',
                borderRadius: '10px',
              }}
              xs={12}>
              <ImageHover
                alt="project"
                height={400}
                imgSrc={project.thumbNail}
                overrideStyles={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '10px',
                  objectFit: 'cover',
                }}
                width={400}
              />
              <DetailButton href={project.href} text="Visit website" />
            </Grid>
            <Grid container item py={2} xs={12}>
              <Box sx={{ color: 'white' }}>
                <Typography
                  variant="h5"
                  sx={{ fontSize: { xs: '24px', md: '24px' } }}>
                  {project.clientName}
                </Typography>
                <Typography
                  fontWeight={'700'}
                  py={3}
                  sx={{ fontSize: { xs: '32px', md: '48px' } }}
                  variant="h3">
                  {project.projectName}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }} py={1}>
                  {project.tags.map((ele) => {
                    return (
                      <Box key={ele} sx={{ marginRight: '1rem' }}>
                        <Typography
                          className={'link-hover'}
                          fontWeight={'700'}
                          variant="subtitle1">
                          #{ele}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: '14px', md: '1rem' } }}>
                  {project.description}
                </Typography>
              </Box>
            </Grid>
            <Grid container item py={2} xs={12}>
              <CustomDivider title="Technologies used" />
              <TechWrapper stack={project.stacks} />
            </Grid>
            <Grid
              container
              item
              py={2}
              sx={{
                display: 'flex',
                flexFlow: 'column',
              }}
              xs={12}>
              <CustomDivider title="Results" />
              <Box sx={{ marginX: 'auto' }}>
                <ImageWrapper stack={project.images} />
              </Box>
              <Box
                sx={{
                  marginX: 'auto',
                  marginY: '3rem',
                  display: 'flex',
                  flexFlow: 'column',
                  alignItems: 'center',
                }}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: '16px', md: '20px' } }}>
                  Like our work? Let us hear your ideas
                </Typography>
                <Button
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    backgroundColor: '#F44161',
                    borderRadius: '35px',
                    paddingX: '1.5rem',
                    paddingY: '10px',
                    marginTop: '2rem',
                    marginRight: '5px',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#911A3A',
                    },
                  }}>
                  <Typography sx={{ mr: 1, fontWeight: 600 }}>
                    Create your project
                  </Typography>
                </Button>
              </Box>
            </Grid>
            <Grid container item py={2} xs={12}>
              <CustomDivider title="Similiar works" />
              <Grid
                container
                sx={{
                  marginTop: '1rem',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                {PROJECTS.map((p) => {
                  if (project.refersId?.includes(p.id)) {
                    return <ProjectCard key={p.id} item={p} />;
                  }
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default ProjectDetailPage;
