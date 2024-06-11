import Image from 'next/image';
import MenuLink from './menuLink/menuLink';

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <div className="sticky top-10">
      <div className='flex items-center gap-5 mb-5'>
        <Image className='rounded-full object-cover' src="/noavatar.png" alt="" width="50" height="50" />
        <div className='flex flex-col'>
          <span className='font-medium'>Pouya Mousayi</span>
          <span className='text-textSoft text-xs'>Super User</span>
        </div>
      </div>
      <ul className=''>
        {menuItems.map((cat) => (
        <li key={cat.title}>
          <span className='text-textSoft font-bold text-sm my-2.5'>{cat.title}</span>
          {cat.list.map((item) => (
            <MenuLink key={item.title} item={item}/>
          ))}
        </li>
        ))}
      </ul>
    </div>
  );
}
