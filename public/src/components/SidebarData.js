import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { MdWorkHistory } from "react-icons/md";
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { IoSettings } from "react-icons/io5";
export const SidebarData = [
  {
    title: 'خانه',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'وظایف من',
    path: '/',
    icon: <FaIcons.FaTasks />,
    cName: 'nav-text'
  },
  {
    title: 'سیستم حضور و غیاب',
    path: '/',
    icon: <MdWorkHistory />,
    cName: 'nav-text'
  },
  {
    title: 'تنظیمات',
    path: '/',
    icon: <IoSettings/>,
    cName: 'nav-text'
  },
  {
    title: 'خروج',
    path: '/',
    icon: <FaIcons.FaPowerOff />,
    cName: 'nav-text'
  },
  {
    title: 'پشتیبانی',
    path: '/',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];