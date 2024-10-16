import DockerIcon from '@/assets/icons/docker-icon.svg';
import JavaIcon from '@/assets/icons/java-icon.svg';
import JsIcon from '@/assets/icons/js-icon.svg';
import NextIcon from '@/assets/icons/next-icon.svg';
import NginxIcon from '@/assets/icons/nginx-icon.svg';
import NodeIcon from '@/assets/icons/node-icon.svg';
import PostgresIcon from '@/assets/icons/postgresql-icon.svg';
import ReactIcon from '@/assets/icons/react-icon.svg';
import SoftwareIcon from '@/assets/icons/software-icon.svg';
import TsIcon from '@/assets/icons/ts-icon.svg';

export const TECH_ICONS = {
  DOCKER: { src: DockerIcon, id: 1 },
  JAVA: { src: JavaIcon, id: 2 },
  JS: { src: JsIcon, id: 3 },
  NEXT: { src: NextIcon, id: 4 },
  NGINX: { src: NginxIcon, id: 5 },
  NODE: { src: NodeIcon, id: 6 },
  POSTGRES: { src: PostgresIcon, id: 7 },
  REACT: { src: ReactIcon, id: 8 },
  TS: { src: TsIcon, id: 9 },
};

export const ICONS = {
  ...TECH_ICONS,
  SOFTWARE: { src: SoftwareIcon, id: 10 },
};

export type TIconKey = keyof typeof ICONS;
export type TTechIconKey = keyof typeof TECH_ICONS;
