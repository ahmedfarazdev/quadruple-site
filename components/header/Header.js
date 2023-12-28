import { Logomini } from "../../utils/icons";
import styles from "./header.module.css";
import Link from 'next/link';
export default function Header () {
    return (
        <div className={styles.navbar}>
        <div className={styles.container}>
            <div className={styles.navinside}>
                <Logomini color="white"/>
                 <div className={styles.insidetext}>
                    <Link href="" className={styles.nav_link}>HOME</Link>
                    <Link href="" className={styles.nav_link}>ABOUT US</Link>
                    <Link href="" className={styles.nav_link}>PROJECTS</Link>
                    <Link href="" className={styles.nav_link}>SERVICES</Link>
                    <Link href="" className={styles.nav_link}>CONTACT US</Link>   
                </div>
                <button className={styles.topbutton}>WHITE PAPER</button>
            </div>
        </div>     
    </div>
    
    )
}

