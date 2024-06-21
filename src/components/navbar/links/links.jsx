import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const Links = () => {
    const links = [
        { name: "Homepage", path: "/" },
        { name: 'About', path: "/about" },
        { name: "Rate", path: "/rate" },
        { name: "Practice", path: "/practice"},
    ];

    const session = true;
    const admin = true;

    return (
        <div className={styles.links}>{links.map((links =>(
            <NavLink item={links} key={links.name}/>
        )))}{
            session ? (
                <>
                    {admin && <NavLink item={{name: "Admin", path: "/admin"}}/>}
                    <button className={styles.logout}>Logout</button>
                </>
            ) : (
                <NavLink item={{name: "Login", path: "/login"}}/>
            )
        }
        </div>
    );
}

export default Links;