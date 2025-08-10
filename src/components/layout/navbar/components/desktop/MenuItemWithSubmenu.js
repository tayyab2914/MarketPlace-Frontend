import { useRouter } from 'next/navigation';
import React from 'react';

const MenuItemWithSubmenu = ({ title, links }) => {
  const router = useRouter();
  return (
    <li className="nav-d-menu-item">
      <div className="nav-d-submenu-title">
        {title}
        <i className="ph ph-caret-down nav-d-submenu-icon"></i>
      </div>

      <ul className="nav-d-submenu">
        {links.map((link) => (
          <li key={link.label}>
            <a
              onClick={() => router.push(link.route)}
              className="nav-d-submenu-item"
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
