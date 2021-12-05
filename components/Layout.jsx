import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Social from "./Social";
import NavigationSide from "./Navigation";
import MiniLogo from "./MiniLogo";
import MainLogo from "./MainLogo";

const Layout = (props) => {
  const { pageState, children } = props;
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={`codeplayer ${pageState}`}>
      <div className="header">
        <div className="container">
          <div className="infoSec">
            <div className="main-logo">
              <Link href="/">
                <a aria-label="Code Payer Logo">
                  <span className="logo-mobile">
                    <MiniLogo />
                  </span>
                  <span className="logo-desktop">
                    <MainLogo />
                  </span>
                </a>
              </Link>
            </div>
            <button className="home-icon" onClick={(e) => setOpenMenu(true)}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <NavigationSide isOpen={openMenu} onClick={setOpenMenu} />
            <Social />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
