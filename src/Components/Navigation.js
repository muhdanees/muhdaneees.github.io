import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCogs,
  faToolbox,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import Styles from "./Navigation.module.css";

const Navigation = [
  {
    path: "/",
    name: "Home",
    icon: faHome,
  },
  {
    path: "/about-us",
    name: "About Us",
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
    path: "/contact-us",
    name: "Contact Us",
    icon: faEnvelope,
  },
];

function NavigationSide() {
  return (
    <div className={`${Styles.Nav}`}>
      <ul>
        {Navigation.map(({ path, name, icon }) => (
          <li key={name}>
            <NavLink exact activeClassName={Styles.NavActive} to={path}>
              <span>{name}</span>
              <FontAwesomeIcon icon={icon} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavigationSide;
