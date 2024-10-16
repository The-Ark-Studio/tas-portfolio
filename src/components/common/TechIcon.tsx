import Typography from '@mui/material/Typography';
import Image, { StaticImageData } from 'next/image';

type TTechIcon = {
  icon: StaticImageData;
  name: string;
  width: number;
  height: number;
};
function TechIcon(props: TTechIcon) {
  const { icon, name, width = 80, height = 80 } = props ?? {};

  if (!icon || !name) {
    return null;
  }

  return (
    <>
      <Image
        alt={`${name} icon`}
        height={height}
        src={icon}
        style={{
          borderRadius: '1rem',
        }}
        width={width}
      />
      <Typography lineHeight={'2rem'} py={2} variant="subtitle2">
        {name}
      </Typography>
    </>
  );
}

export default TechIcon;
