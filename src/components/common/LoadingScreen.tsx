import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function LoadingScreen() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 999,
      }}>
      <CircularProgress size={60} />
    </Box>
  );
}
