import styles from "./footer.module.css"
import Link from "next/link"
import { Fb, Logow, Tweet, Insta, In } from "../../utils/icons"
export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.contact}>
                <div className={styles.logow}>
                    <Logow color="white" />
                </div>
                <div className={styles.socials}>
                    <Link href="" className={styles.icon1}>
                        <Fb />
                    </Link>
                    <Link href="" className={styles.icon1}>
                        <Tweet />
                    </Link>
                    <Link href="" className={styles.icon1}>
                        <Insta />
                    </Link>
                    <Link href="" className={styles.icon1}>
                        <In />
                    </Link>
                </div>
            </div>
            <div className={styles.forward}>
                <div className={styles.one}>
                    <div className={styles.comp}>
                        <h2>Company</h2>
                    </div>
                    <div className={styles.links}>
                        <Link href="">Usages</Link>
                        <Link href="">Our Projects</Link>
                        <Link href="">Coin & System</Link>
                    </div>
                </div>
                <div className={styles.one}>
                    <div className={styles.comp}>
                        <h2>Others</h2>
                    </div>
                    <div className={styles.links}>
                        <Link href="">Privacy Policy</Link>
                        <Link href="">Terms Of Use</Link>
                        <Link href="">Faq&lsquo;s</Link>
                    </div>
                </div>
                <div className={styles.one}>
                    <div className={styles.comp}>
                        <h2>Contact Us</h2>
                    </div>
                    <div className={styles.links}>
                        <Link href="">Islamabad, Pakistan</Link>
                        <Link href="">(333) 123-4567</Link>
                        <Link href="">support@gmail.com</Link>
                    </div>
                </div>
                <div className={styles.one}>
                    <div className={styles.comp}>
                        <h2>Report</h2>
                    </div>
                    <div className={styles.submit}>
                        <textarea className={styles.text_bar} placeholder="Enter Something" ></textarea>
                        <button type="submit" className={styles.button}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}