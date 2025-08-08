import { useRouter } from 'next/navigation';
import React from 'react';

const MenuItemWithSubmenu = ({ title, links }) => {
  const router = useRouter();
  return (
    <li className="nav-menu-item">
      <div className="nav-submenu-title">
        {title}
        <i className="ph ph-caret-down nav-submenu-icon"></i>
      </div>

      <ul className="nav-submenu">
        {links.map((link) => (
          <li key={link.label}>
            <a
              onClick={() => router.push(link.route)}
              className="nav-submenu-item"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default MenuItemWithSubmenu;
