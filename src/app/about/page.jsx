import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>Sobre mim</h2>
                <h1 className={styles.biggerTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam illum 
                    error repellendus nemo impedit deserunt numquam ratione maiores enim, rerum aut asperiores quas! 
                    Reiciendis maxime repellendus veritatis officiis placeat.
                </p>
            </div> 
            <div className={styles.imgContainer}>
                <Image 
                    src="/about.png" 
                    alt="About Image" 
                    fill
                    priority={false}
                    className={styles.aboutImg}
                />
            </div>
        </div>
    );
}

export default AboutPage;