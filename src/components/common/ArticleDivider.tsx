import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
function ArticleDivider({ title }: { title: string }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Divider
        sx={{
          fontSize: '1.5rem',
          '&::before, &::after': {
            borderColor: '#687380',
            borderWidth: 2,
          },
        }}
        textAlign="left">
        {title}
      </Divider>
    </Box>
  );
}

export default ArticleDivider;
