"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";
import { handleLogout } from "@/lib/action";

const Links = ({ user }) => {
  const [open, setOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const links = [
    { name: "Página Inicial", path: "/" },
    { name: "Pratique", path: "/practice" },
    { name: "Ranking", path: "/ranking" },
    { name: "Sobre", path: "/about" },
  ];

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.name} />
        ))}
        {user ? (
          <>
            {user?.isAdmin && (
              <NavLink item={{ name: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Sair</button>
            </form>
          </>
        ) : (
          <NavLink item={{ name: "Entrar", path: "/login" }} />
        )}
      </div>
      <button
        className={styles.burger}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Image src="/menu.png" alt="" width={20} height={20} />
      </button>
      {open && (
        <div className={styles.mobileLinks} ref={mobileMenuRef}>
          {links.map((link) => (
            <div key={link.name} onClick={handleLinkClick}>
              <NavLink item={link} key={link.name} />
            </div>
          ))}
          {user ? (
            <>
              {user?.isAdmin && (
                <div key={links.name} onClick={handleLinkClick}>
                  <NavLink item={{ name: "Admin", path: "/admin" }} />
                </div>
              )}
              <button className={styles.logout} onClick={handleLinkClick}>
                Sair
              </button>
            </>
          ) : (
            <NavLink item={{ name: "Entrar", path: "/login" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
