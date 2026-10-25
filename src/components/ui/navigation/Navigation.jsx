import styles from "./Navigation.module.css";

import { useApp } from "@/context/AppContext";

const Navigation = ({ texts }) => {
  const { toBlock, upButton, isMobile } = useApp();

  return (
    <>
      <ul className={isMobile ? styles.navbarMobile : styles.navbar}>
        <li>
          <a onClick={upButton} href="#home">
            {texts.home}
          </a>
        </li>
        <li>
          <a onClick={() => toBlock(!isMobile ? 800 : 1100)} href="#events">
            {texts.events}
          </a>
        </li>
        <li>
          <a onClick={() => toBlock(!isMobile ? 2200 : 2700)} href="#photos">
            {texts.photos}
          </a>
        </li>
        <li>
          <a onClick={() => toBlock(!isMobile ? 3100 : 3400)} href="#location">
            {texts.location}
          </a>
        </li>
        <li>
          <a onClick={() => toBlock(4000)} href="#wishes">
            {texts.wishes}
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
