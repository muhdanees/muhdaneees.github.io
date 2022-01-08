import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Social from "./Social";
import NavigationSide from "./Navigation";
import MiniLogo from "./MiniLogo";
import MainLogo from "./MainLogo";
import Script from 'next/script';

const Layout = (props) => {
  const { pageState, children } = props;
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={`codeplayer ${pageState}`}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Z116WN1KPF"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function stag(){dataLayer.push(arguments);}
        stag('js', new Date());
        gtag('config', 'G-Z116WN1KPF');
      `}
      </Script>
      <div className="header">
        <div className="container">
          <div className="infoSec">
            <div className="main-logo">
              <Link href="/" prefetch={false}>
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
