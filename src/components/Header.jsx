import { FaSearch } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ setSelectedTab }) => {
  // const headBtns = [IoMdNotifications, IoChatboxEllipses, FaUserFriends];
  return (
    <div className="header shadow p-3 bg-body-tertiary rounded">
      <div className="container">
        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-between">
          <div className="input-group">
            <input
              className="form-control searchBar"
              type="search"
              placeholder={`Search Posts`}
              aria-label="Search"
            />
            <button className="search-btn">
              <FaSearch />
            </button>
          </div>

          <ul className="d-flex flex-row justify-content-around mt-4 ulItem">
            <li>
              <Link
                to="/home"
                onClick={() => {
                  // setSelectedTab("Home");
                }}
              >
                <FaHome />
              </Link>
            </li>
            <li>
              <a href="/">
                <IoMdNotifications />
              </a>
            </li>
            <li>
              <a href="/">
                <IoChatboxEllipses />
              </a>
            </li>
            <li>
              <a href="/">
                <FaUserFriends />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
