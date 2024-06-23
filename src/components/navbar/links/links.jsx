"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const Links = () => {
    const [open, setOpen] = useState(false);
    const links = [
        { name: "Página Inicial", path: "/" },
        { name: "Pratique", path: "/practice"},
        { name: "Avalie-me", path: "/rate" },
        { name: 'Sobre', path: "/about" },
    ];

    const session = true;
    const admin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>{links.map((links =>(
                <NavLink item={links} key={links.name}/>
            )))}{
                session ? (
                    <>
                        {admin && <NavLink item={{name: "Admin", path: "/admin"}}/>}
                        <button className={styles.logout}>Sair</button>
                    </>
                ) : (
                    <NavLink item={{name: "Entrar", path: "/login"}}/>
                )
            }
            </div>
            <button className={styles.burger} onClick={()=>setOpen(prev => !prev)}>Button</button>
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.name}/>
                    ))}
                </div>
            }
        </div>
    );
}

export default Links;