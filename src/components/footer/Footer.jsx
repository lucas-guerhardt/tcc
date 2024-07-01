import styles from './footer.module.css';

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>pindev</div>
            <div className={styles.text}>Desenvolvido com ♥ por Lucas Guerhardt Pinheiro. Agradecimentos à <a href="https://www.youtube.com/@LamaDev" target="_blank" rel="noopener noreferrer">LamaDev</a>© All rights reserved.</div>
        </div>
    );
}

export default Footer;