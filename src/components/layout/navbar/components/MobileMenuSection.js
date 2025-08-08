import { useRouter } from "next/navigation";
import { Divider } from "antd";
import { useState } from "react";

export const MobileMenuSection = ({ section }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  if (section?.type === "submenu") {
    const toggleSubMenu = () => setIsOpen((prev) => !prev);

    return (
      <li>
        <Divider size="small" />
        <div className="nav-m-submenu-toggle">
          <div
            className="nav-m-section-row"
            onClick={toggleSubMenu}
          >
            <span className="nav-m-section-title">
              {section?.title}
            </span>
            <i
              className={`nav-m-caret-icon ${isOpen ? "nav-m-rotate-90" : ""}`}
            >
              <i className="ph ph-caret-right"></i>
            </i>
          </div>

          <ul
            className={`nav-m-submenu-list ${isOpen ? "nav-m-submenu-open" : "nav-m-submenu-closed"}`}
          >
            {section?.links?.map((link, idx) => (
              <li
                key={idx}
                className="nav-m-list-item"
              >
                <a onClick={() => router.push(link?.route)}>{link?.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  }

  if (section?.type === "single") {
    return (
      <li>
        <Divider size="small" />
        <div className="nav-m-section-row">
          <a
            onClick={() => router.push(section?.route)}
            className="nav-m-section-title"
          >
            {section?.title}
          </a>
        </div>
      </li>
    );
  }

  return null;
};
