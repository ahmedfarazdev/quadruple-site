import styles from "./hero.module.css"
import Image from "next/image";
import heroImg from "../../public/images/head-img.jpg"
// import Image  from "next/image";
import SideImg from "../../public/images/sidelogo.png"
export default function Hero() {
    return (
        <>
            <div className={styles.front}>
                <div className={styles.main_img}>
                    <div>
                        <Image className={styles.img}
                            src={heroImg}
                            width={1640}
                            height={1218}
                            alt="desktop image" />
                    </div>
                    <div className={styles.side}>
                        <Image
                            src={SideImg}
                            width={300}
                            height={516}
                            alt="logo" />
                    </div>
                </div>
                <div className={styles.main_txt}>
                    <h1 className={styles.quad}>QUADRUPLE</h1>
                    <p className={styles.sol}>SOLUTIONS</p>
                </div>
            </div>
        </>
    )
}