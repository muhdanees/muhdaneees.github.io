import React from "react";
import Styles from "./NavigationTop.module.css";
function NavigationTop() {
  return (
    <div className={`${Styles.Tabs}`}>
      <ul>
        <li className={`${Styles.List} ${Styles.ListActive}`}><span>home</span></li>
        <li className={`${Styles.List}`}><span>about-us/</span></li>
        <li className={`${Styles.List}`}><span>skills/</span></li>
        <li className={`${Styles.List}`}><span>experience/</span></li>
        <li className={`${Styles.List}`}><span>portfoli/</span></li>
        <li className={`${Styles.List}`}><span>contact-us/</span></li>
      </ul>
    </div>
  )
}

export default NavigationTop;