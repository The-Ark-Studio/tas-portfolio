'use client';
import { DeviceTypes } from '@/constants';
import { useDevice } from '@/hooks';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { CSSProperties, useCallback, useState } from 'react';

export interface IImageHoverProps {
  imgSrc: string | StaticImport;
  overrideStyles?: CSSProperties;
  alt: string;
  height?: number;
  width?: number;
}
export const ImageHover = (props: IImageHoverProps) => {
  const { imgSrc, overrideStyles, alt, height = 550, width = 600 } = props;
  const [isZoomed, setIsZoomed] = useState(false);
  const isMobile = useDevice(DeviceTypes.MOBILE);

  const handleMouseEnter = useCallback(() => setIsZoomed(true), []);
  const handleMouseLeave = useCallback(() => setIsZoomed(false), []);

  return (
    <Image
      alt={alt}
      height={height}
      loading="lazy"
      placeholder="blur"
      src={imgSrc}
      style={{
        width: '100%',
        transform: !isMobile && isZoomed ? 'scale(1.2)' : 'scale(1)',
        cursor: 'pointer',
        transition: 'transform 0.3s ease-in-out',
        objectFit: 'cover',
        ...overrideStyles,
      }}
      width={width}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};
