import { ReactNode } from 'react'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';


interface Category {
    name: string,
    icon: ReactNode
}

export const logo: string = 'https://i.ibb.co/4Vxp7S0/icons8-youtube-480.png';

export const categories : Category[] = [
  { name: 'New', icon: <HomeIcon /> },
  { name: 'JS Mastery', icon: <CodeIcon /> },
  { name: 'Coding', icon: <CodeIcon /> },
  { name: 'ReactJS', icon: <CodeIcon /> },
  { name: 'NextJS', icon: <CodeIcon /> },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Education', icon: <SchoolIcon />, },
  { name: 'Podcast', icon: <GraphicEqIcon />, },
  { name: 'Movie', icon: <OndemandVideoIcon />, },
  { name: 'Gaming', icon: <SportsEsportsIcon />, },
  { name: 'Live', icon: <LiveTvIcon />, },
  { name: 'Sport', icon: <FitnessCenterIcon />, },
  { name: 'Fashion', icon: <CheckroomIcon />, },
  { name: 'Beauty', icon: <FaceRetouchingNaturalIcon />, },
  { name: 'Comedy', icon: <TheaterComedyIcon />, },
  { name: 'Gym', icon: <FitnessCenterIcon />, },
  { name: 'Crypto', icon: <DeveloperModeIcon />, },
];

export const demoThumbnailUrl:string = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl:string = '/channel/UC2275rwUB7t9rkZBjPE02eQ';
export const demoVideoUrl:string = '/video/ki5PtU4HBuM';
export const demoChannelTitle:string = 'Aparajit Garg';
export const demoVideoTitle:string = 'Frontend Developer';
export const demoProfilePicture:string = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'