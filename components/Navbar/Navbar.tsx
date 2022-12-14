import Link from "next/link";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faDatabase } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";

const Navbar: React.FC = () => {
  useEffect(() => {});

  return (
    <nav className={`${styles.navbar} bg-dark`}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link className={styles.navLink} href={"/"}>
            <FontAwesomeIcon icon={faUser} fontSize={50} />
          </Link>
          Users
        </li>
        <li className={styles.navbarItem}>
          <Link href={"/repo-search"}>
            <FontAwesomeIcon icon={faDatabase} fontSize={50} />
          </Link>
          Repos
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
