import DemoOne from '@/assets/images/demo/demo_1.png';
import DemoTwo from '@/assets/images/demo/demo_2.png';
import DemoThree from '@/assets/images/demo/demo_3.png';
import DemoFour from '@/assets/images/demo/demo_4.png';
import DemoFive from '@/assets/images/demo/demo_5.png';
import DemoSix from '@/assets/images/demo/demo_6.png';
import ProjectHerb from '@/assets/images/projects/herb.png';
import ProjectMover from '@/assets/images/projects/mover.png';
import ProjectNail from '@/assets/images/projects/nail.png';
import { NavigationPath } from '@/constants';
import { EImageType, IProject } from '@/types';

export const PROJECTS: IProject[] = [
  {
    id: 1,
    thumbNail: ProjectHerb,
    clientName: 'Herb Orders',
    projectName: 'Herb Orders',
    tags: ['Website', 'Landingpage', 'Front-end', 'UX/UI Design'],
    stacks: [
      { icon: 'JS', name: 'Javascript' },
      { icon: 'NGINX', name: 'Nginx' },
      { icon: 'REACT', name: 'React' },
      { icon: 'TS', name: 'Typescript' },
    ],
    description: 'A demo for the landing of herb shopping',
    images: [
      { id: 'sm_1', img: DemoOne, type: EImageType.MEDIUM },
      { id: 'sm_2', img: DemoTwo, type: EImageType.MEDIUM },
      { id: 'sl_1', img: DemoThree, type: EImageType.LARGE },
      { id: 'ss_1', img: DemoFour, type: EImageType.SMALL },
      { id: 'ss_2', img: DemoFive, type: EImageType.SMALL },
      { id: 'ss_3', img: DemoSix, type: EImageType.SMALL },
    ],
    href: 'https://herbs.theark.studio',
    refersId: [2, 3],
  },
  {
    id: 2,
    thumbNail: ProjectMover,
    clientName: 'TAS',
    projectName: 'Movers',
    refersId: [1],
    tags: ['Website', 'Landingpage', 'Front-end', 'UX/UI Design'],
    stacks: [
      { icon: 'DOCKER', name: 'Docker' },
      { icon: 'NEXT', name: 'NextJs' },
      { icon: 'NGINX', name: 'Nginx' },
      { icon: 'REACT', name: 'React' },
      { icon: 'TS', name: 'Typescript' },
    ],
    description: 'A demo for the landing of mover services',
    images: [
      { id: 'sm_1', img: DemoOne, type: EImageType.MEDIUM },
      { id: 'sm_2', img: DemoTwo, type: EImageType.MEDIUM },
      { id: 'sm_3', img: DemoTwo, type: EImageType.MEDIUM },
      { id: 'ss_1', img: DemoSix, type: EImageType.SMALL },
      { id: 'ss_2', img: DemoSix, type: EImageType.SMALL },
    ],
    href: 'https://mover.theark.studio',
  },
  {
    id: 3,
    thumbNail: ProjectNail,
    clientName: 'TAS',
    projectName: 'Nail',
    tags: ['Website', 'Landingpage', 'Front-end', 'UX/UI Design'],
    refersId: [1, 2],
    stacks: [
      { icon: 'DOCKER', name: 'Docker' },
      { icon: 'NEXT', name: 'NextJs' },
      { icon: 'NGINX', name: 'Nginx' },
      { icon: 'REACT', name: 'React' },
      { icon: 'TS', name: 'Typescript' },
    ],
    description: 'A demo for the landing of nail services',
    images: [
      { id: 'sl_1', img: DemoOne, type: EImageType.LARGE },
      { id: 'sm_1', img: DemoTwo, type: EImageType.MEDIUM },
      { id: 'sl_2', img: DemoThree, type: EImageType.LARGE },
      { id: 'ss_1', img: DemoFour, type: EImageType.SMALL },
      { id: 'ss_2', img: DemoFive, type: EImageType.SMALL },
      { id: 'ss_3', img: DemoSix, type: EImageType.SMALL },
    ],
    href: 'https://nail.theark.studio',
  },
];

export const TITLE_NAV: Array<{ id: number; title: string; href: string }> = [
  { id: 1, title: 'Home', href: NavigationPath.HOME },
  { id: 2, title: 'Projects', href: NavigationPath.PROJECT },
  { id: 3, title: 'Our Team', href: NavigationPath.PEOPLE },
  { id: 4, title: 'Tech We Use', href: NavigationPath.TECH },
  { id: 5, title: 'Contact us', href: NavigationPath.CONTACT },
];
