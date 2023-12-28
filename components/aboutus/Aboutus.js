import styles from "./aboutus.module.css";
import { Chart, Design, Id ,Edu , Location } from "../../utils/icons";
import { Sheild } from "../../utils/icons";
import Link from 'next/link';
export default function Aboutus() {
    return (
        <div className={styles.div}>
            <h1 className={styles.Aboutus}>About Us</h1>
            <p className={styles.aboutus_below}>All You Need To Know About Us</p>
            <div className={styles.abtus}>
                <div className={styles.container}>
                    <Design color="#535557" />
                    <h4 className={styles.head1}>Lorem Ipsum</h4>
                    <p className={styles.para1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <Link href="" className={styles.link}>Accusantium Dolor</Link>
                </div>
                <div className={styles.container2}>
                    <Sheild color="#535557" />
                    <h4 className={styles.head2}>Lorem Ipsum</h4>
                    <p className={styles.para2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <Link href="" className={styles.link2}>Accusantium Dolor</Link>
                </div>
                <div className={styles.container3}>
                    <Chart color="#535557" />
                    <h4 className={styles.head3}>Lorem Ipsum</h4>
                    <p className={styles.para3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <Link href="" className={styles.link3}>Accusantium Dolor</Link>
                </div>
                <div className={styles.container4}>
                    <Id color="#535557" />
                    <h4 className={styles.head4}>Lorem Ipsum</h4>
                    <p className={styles.para4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <Link href="" className={styles.link4}>Accusantium Dolor</Link>
                </div>
                <div className={styles.container5}>
                    <Edu color="#535557" />
                    <h4 className={styles.head5}>Lorem Ipsum</h4>
                    <p className={styles.para5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <Link href="" className={styles.link5}>Accusantium Dolor</Link>
                </div>
                <div className={styles.container6}>
                    <Location color="#535557" />
                    <h4 className={styles.head6}>Lorem Ipsum</h4>
                    <p className={styles.para6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <Link href="" className={styles.link6}>Accusantium Dolor</Link>
                </div>
                <div className={styles.container7}>
                    <Design color="#535557" />
                    <h4 className={styles.head7}>Lorem Ipsum</h4>
                    <p className={styles.para7}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <Link href="" className={styles.link7}>Accusantium Dolor</Link>
                </div>
                <div className={styles.container8}>
                    <Id color="#535557" />
                    <h4 className={styles.head8}>Lorem Ipsum</h4>
                    <p className={styles.para8}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <Link href="" className={styles.link8}>Accusantium Dolor</Link>
                </div>
            </div>
        </div>
    )
}