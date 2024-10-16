import Member from '@/assets/images/team/member.png';
import WeReact from '@/assets/images/team/react.png';
import WeSee from '@/assets/images/team/see.png';
import WeTreat from '@/assets/images/team/treat.png';
import WeWork from '@/assets/images/team/work.png';
import { IDescription, IMember } from '@/types';

export const DESCRIPTION: IDescription[] = [
  {
    id: 1,
    img: WeWork,
    title: 'Our Philosophy:',
    content:
      'In a world where individuality often takes center stage, we choose to celebrate the collective. We understand that it is the harmonious blend of our individual strengths that creates something truly extraordinary. Our ethos, “Together We Are One,” reflects our commitment to fostering a culture where every voice is heard, every idea is valued, and every contribution is essential to our collective success.',
  },
  {
    id: 2,
    img: WeTreat,
    title: 'Our People:',
    content:
      'We are artists, engineers, dreamers, and doers. Each member of The Ark Studio brings their unique flair to the table, yet we all share a common goal: to transcend the ordinary and craft experiences that resonate and inspire. From the meticulous attention to detail of our designers to the visionary foresight of our strategists, we are united in our pursuit of excellence.',
  },
  {
    id: 3,
    img: WeSee,
    title: 'Our Community:',
    content:
      'The Ark Studio is more than just a workplace; it’s a community. A place where collaboration isn’t just encouraged—it’s ingrained in everything we do. We support one another, learn from each other, and celebrate our achievements together. Our studio is a sanctuary for creativity, where the seeds of great ideas are nurtured by the collective wisdom of our team.',
  },
  {
    id: 4,
    img: WeReact,
    title: 'Our Impact:',
    content:
      'Together, we create more than just products or services; we create experiences that leave a lasting impression. We take pride in our ability to merge art with technology, intuition with analytics, and vision with execution. The result is a portfolio of work that not only meets the needs of our clients but also enriches the lives of those who interact with it.',
  },
];

export const MEMBER: IMember[] = [
  {
    id: 1,
    img: Member,
    name: "Member's Name",
    position: 'Position',
  },
  {
    id: 2,
    img: Member,
    name: "Member's Name",
    position: 'Position',
  },
  {
    id: 3,
    img: Member,
    name: "Member's Name",
    position: 'Position',
  },
  {
    id: 4,
    img: Member,
    name: "Member's Name",
    position: 'Position',
  },
  {
    id: 5,
    img: Member,
    name: "Member's Name",
    position: 'Position',
  },
  {
    id: 6,
    img: Member,
    name: "Member's Name",
    position: 'Position',
  },
];
