import React from 'react';

const MenuItemWithSubmenu = ({ title, links }) => {
  return (
    <li className="group relative cursor-pointer">
      <div className="subMenuTitle flex items-center gap-1 px-2 py-3 hover:text-b500">
        {title}
        <i className="ph ph-caret-down block pt-0.5 duration-700 group-hover:rotate-180"></i>
      </div>
      <ul className="group-hover:eventunset pointer-events-none invisible absolute left-0 top-12 w-[220px] translate-y-8 scale-75 flex-col gap-3 rounded-lg bg-b300 py-6 text-white/90 opacity-0 duration-500 group-hover:visible group-hover:z-50 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="subMenuItem px-6 duration-500 hover:ml-2 hover:text-y200"
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
