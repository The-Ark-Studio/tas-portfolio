import { StaticImageData } from 'next/image';

export type TAnyType = any;

export interface IDescription {
  id: number;
  img: StaticImageData;
  title: string;
  content: string;
}

export interface IMember {
  id: number;
  img: StaticImageData;
  name: string;
  position: string;
}
export interface IImage {
  id: string;
  img: StaticImageData;
  type: string;
}
export interface ITechs {
  icon: string;
  name: string;
}
export interface IProject {
  id: number;
  thumbNail: StaticImageData;
  clientName: string;
  tags: string[];
  stacks: ITechs[];
  projectName: string;
  description: string;
  images: IImage[];
  href: string;
  refersId: Array<number> | undefined;
}
export enum EPathSlot {
  FIRST = 'FIRST',
  LAST = 'LAST',
}
export enum EImageType {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

export enum ETechs {
  DOCKER = 'DOCKER',
  JAVA = 'JAVA',
  JS = 'JS',
  NEXT = 'NEXT',
  NGINX = 'NGINX',
  NODE = 'NODE',
  POSTGRES = 'POSTGRES',
  REACT = 'REACT',
  TS = 'TS',
}
