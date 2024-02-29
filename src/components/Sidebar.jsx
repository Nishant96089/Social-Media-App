import styles from "../styles/Sidebar.module.css";
import { FaHome } from "react-icons/fa";
import { SiAzuredataexplorer } from "react-icons/si";
import { HiTrendingUp } from "react-icons/hi";
import { LiaListSolid } from "react-icons/lia";
import { IoBookmarks } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { IoCreate } from "react-icons/io5";

const Sidebar = ({ selectedTab, setSelectedtab }) => {
  const sideBtns = [
    {
      icon: FaHome,
      name: "Home",
    },
    {
      icon: IoCreate,
      name: "Create Post",
    },
    {
      icon: SiAzuredataexplorer,
      name: "Explore",
    },
    {
      icon: HiTrendingUp,
      name: "Trending",
    },
    {
      icon: LiaListSolid,
      name: "Lists",
    },
    {
      icon: IoBookmarks,
      name: "Saved",
    },
    {
      icon: IoSettings,
      name: "Settings",
    },
  ];
  return (
    <div
      className={`d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary ${styles.sidebar} shadow p-3 mb-5 bg-body-tertiary rounded`}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none shadow p-3 mb-5 bg-body-tertiary rounded"
      >
        <img
          width="60"
          height="60"
          src="https://img.icons8.com/bubbles/100/react.png"
          alt="react"
          className="bi pe-none me-4"
        />
        <span className="fs-4 fw-bold appName">DEV.connect</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {sideBtns.map((item) => (
          <li
            className={`nav-item`}
            key={item.name}
            onClick={() => {
              setSelectedtab(item.name);
            }}
          >
            <a
              href="#"
              className={`nav-link ${
                selectedTab === item.name ? "active" : "link-body-emphasis"
              } ${styles.sideBtns}`}
              aria-current="page"
            >
              <item.icon
                className="bi pe-none me-4 mb-1"
                width="16"
                height="16"
              />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>nishant.dev</strong>
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              Switch Accounts
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
