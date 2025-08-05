import React from 'react';
import MenuItemWithSubmenu from './MenuItemWithSubmenu';

const DesktopMenu = () => {
  const menuData = [
    // {
    //   title: 'Home',
    //   links: [
    //     { label: 'Home One', href: '#' },
    //     { label: 'Home Two', href: './index2.html' },
    //     { label: 'Home Three', href: './index3.html' },
    //     { label: 'Home Four', href: './index4.html' },
    //   ],
    // },
    {
      title: 'Services',
      links: [
        { label: 'All Services', href: './services.html' },
        { label: 'Service Details', href: './service-details.html' },
        { label: 'Browse Tasks', href: './browse-tasks.html' },
      ],
    },
    {
      title: 'Worker',
      links: [
        { label: 'Find Workers', href: './find-workers.html' },
        { label: 'Worker Profile', href: './worker-profile.html' },
        { label: 'Worker Portfolio', href: './worker-portfolio.html' },
        { label: 'Portfolio Details', href: './worker-portfolio-details.html' },
        { label: 'Hire Worker', href: './hire-me.html' },
        { label: 'Worker Dashboard', href: './dashboard/index.html' },
      ],
    },
    {
      title: 'Pages',
      links: [
        { label: 'About Us', href: './about-us.html' },
        { label: 'Blog', href: './blog.html' },
        { label: 'Blog Details', href: './blog-details.html' },
        { label: 'Chat', href: './chat.html' },
        { label: 'FAQ', href: './faq.html' },
        { label: 'Contact', href: './contact.html' },
        { label: 'Not Found', href: './not-found.html' },
        { label: 'Privacy Policy', href: './privacy-policy.html' },
        { label: 'Terms & Conditions', href: './terms-conditions.html' },
      ],
    },
  ];

  return (
    <ul className="flex items-center gap-2 font-medium xxl:gap-6">
      {menuData.map((item) => (
        <MenuItemWithSubmenu key={item.title} title={item.title} links={item.links} />
      ))}
    </ul>
  );
};

export default DesktopMenu;
