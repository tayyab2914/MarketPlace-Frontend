import { useRouter } from "next/navigation";
import { Divider } from "antd";
import { useState } from "react";

export const MobileMenuSection = ({ section }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  if (section?.type === "submenu") {
    // Submenu with expandable links
    const toggleSubMenu = () => setIsOpen((prev) => !prev);

    return (
      <li>
        <Divider size="small" />
        <div className="subMenuToggle group flex flex-col items-start justify-start">
          <div
            className="nav-m-section-row flex justify-between w-full cursor-pointer"
            onClick={toggleSubMenu}
          >
            <span className="mobileSubMenuTitle nav-m-section-title">
              {section?.title}
            </span>
            <i
              className={`pl-1 pt-1 !text-xl duration-500 transition-transform ${
                isOpen ? "rotate-90" : ""
              }`}
            >
              <i className="ph ph-caret-right"></i>
            </i>
          </div>

          <ul
            className="subMenuClose subMenu gap-2 pl-4 overflow-hidden nav-m-list"
            style={{
              maxHeight: isOpen ? "500px" : "0",
              opacity: isOpen ? 1 : 0,
              transition: "max-height 0.3s ease, opacity 0.3s ease",
            }}
          >
            {section?.links?.map((link, idx) => (
              <li
                key={idx}
                style={{ width: "100%" }}
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
    // Single link without submenu
    return (
      <li>
        <Divider size="small" />
        <div className="nav-m-section-row">
          <a
            onClick={() => router.push(section?.route)}
            className="mobileSubMenuTitle nav-m-section-title cursor-pointer"
          >
            {section?.title}
          </a>
        </div>
      </li>
    );
  }

  return null; // Fallback if unknown type
};
