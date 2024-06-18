import Link from "next/link";

const Links = () => {
    const links = [
        { name: 'Homepage', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div>{links.map((link =>(
            <Link href={links.path}>{links.name}</Link>
        )))}
        </div>
    );
}

export default Links;