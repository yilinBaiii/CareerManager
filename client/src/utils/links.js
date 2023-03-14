import { MdQueryStats, MdOutlineBusinessCenter, MdOutlineAddchart } from 'react-icons/md';
import { BsPersonWorkspace } from 'react-icons/bs';

const links = [
  {
    id: 1,
    text: 'stats',
    path: '/',
    icon: <BsPersonWorkspace />,
  },
  {
    id: 2,
    text: 'all jobs',
    path: 'all-jobs',
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: 'add jobs',
    path: 'add-jobs',
    icon: <MdOutlineAddchart />,
  },
  {
    id: 4,
    text: 'profile',
    path: 'profile',
    icon: <MdOutlineBusinessCenter />,
  },
];

export default links;