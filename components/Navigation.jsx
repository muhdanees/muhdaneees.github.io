import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCogs,
  faToolbox,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Styles from "./Navigation.module.scss";

const Navigation = [
  {
    path: "/",
    name: "Home",
    icon: faHome,
  },
  {
    path: "/about-me",
    name: "About Me",
    icon: faUser,
  },
  {
    path: "/skills",
    name: "Skills",
    icon: faCogs,
  },
  {
    path: "/experience",
    name: "Experience",
    icon: faToolbox,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    icon: faGlobe,
  },
  {
    path: "/contact-me",
    name: "Contact Me",
    icon: faEnvelope,
  },
];

function NavigationSide({ isOpen, onClick }) {

  const menuClick = (e) => {
    e.stopPropagation();
    onClick(false);
  };

  return (
    <div
      className={`${Styles.Nav} ${isOpen ? Styles.OpenNav : ""}`}
      onClick={menuClick}
    >
      <ul>
        {Navigation.map(({ path, name, icon }) => (
          <li key={name}>
            <Link prefetch={false} href={path}>
              <span>
                <span>{name}</span>
                <FontAwesomeIcon icon={icon} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavigationSide;
