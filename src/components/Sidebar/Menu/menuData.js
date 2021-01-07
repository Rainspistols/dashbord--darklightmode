import { AiFillHome, AiFillSetting } from 'react-icons/ai';
import { RiLuggageDepositFill } from 'react-icons/ri';
import { MdLocalOffer, MdPayment } from 'react-icons/md';

export const menuData = [
  {
    title: 'Home',
    icon: <AiFillHome />,
  },
  {
    title: 'Deposits',
    icon: <RiLuggageDepositFill />,
  },
  {
    title: 'Offers',
    icon: <MdLocalOffer />,
  },
  {
    title: 'Payments',
    icon: <MdPayment />,
  },
  {
    title: 'Settings',
    icon: <AiFillSetting />,
  },
];
