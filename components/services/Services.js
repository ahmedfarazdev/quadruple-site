import styles from "./services.module.css";
import { Icon1, Icon2, Icon3 ,Icon4 } from "../../utils/icons";
import Link from "next/link";
export default function Services() {
    return (
        <div className={styles.container}>
            <h1 className={styles.head}>Services</h1>
            <h6 className={styles.serb}> services we provide</h6>
            <div className={styles.services}>
                <div className={styles.container1}>
                    <div className={styles.icon1}>
                        <Icon1 color="#535557" />
                    </div>
                    <div className={styles.context}>
                        <h3 className={styles.first}>Lorem Ipsum</h3>
                        <p className={styles.firstb} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                        <Link href="" className={styles.link1}>velit esse cillum dolore eu fug </Link>
                    </div>
                </div>
                <div className={styles.container2}>
                    <div className={styles.icon1}>
                        <Icon2 color="#535557" />
                    </div>
                    <div className={styles.context2}>
                        <h3 className={styles.second}>Lorem Ipsum</h3>
                        <p className={styles.secondb} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                        <Link href="" className={styles.link2}>velit esse cillum dolore eu fug </Link>
                    </div>
                </div>
            </div>
            <div className={styles.services2}>
                <div className={styles.container3}>
                    <div className={styles.icon1}>
                        <Icon3 color="#535557" />
                    </div>
                    <div className={styles.context3}>
                        <h3 className={styles.third}>Lorem Ipsum</h3>
                        <p className={styles.thirdb} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                        <Link href="" className={styles.link3}>velit esse cillum dolore eu fug </Link>
                    </div>
                </div>
                <div className={styles.container4}>
                    <div className={styles.icon1}>
                        <Icon4 color="#535557" />
                    </div>
                    <div className={styles.context4}>
                        <h3 className={styles.fourth}>Lorem Ipsum</h3>
                        <p className={styles.fourthb} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                        <Link href="" className={styles.link4}>velit esse cillum dolore eu fug </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 