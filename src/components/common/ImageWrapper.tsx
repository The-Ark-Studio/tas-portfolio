import { EImageType, IImage } from '@/types';
import Grid from '@mui/material/Grid';
import { useCallback } from 'react';
import { ImageHover } from './ImageHover';

function ImageWrapper(props: { stack: IImage[] }) {
  const { stack } = props ?? {};
  const getGridSize = useCallback((type: string) => {
    switch (type) {
      case EImageType.SMALL: {
        return 4;
      }
      case EImageType.MEDIUM: {
        return 6;
      }
      case EImageType.LARGE: {
        return 12;
      }
      default: {
        return 6;
      }
    }
  }, []);

  return (
    <Grid container>
      {stack.map((image) => {
        const { img, type } = image ?? {};

        if (!img || !type) {
          return null;
        }
        const gridSize = getGridSize(type);

        return (
          <Grid
            key={image.id}
            item
            xs={12}
            lg={gridSize}
            height={370}
            overflow="hidden">
            <ImageHover
              alt="Result's images"
              imgSrc={img}
              overrideStyles={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ImageWrapper;
