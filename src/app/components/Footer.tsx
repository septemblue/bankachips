import styles from '../styles/Footer.module.css'
import {Logo, YellowTwirl, Email, WA, Instagram} from "../media/images";
import {css} from "@emotion/css";

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <LeftFooter/>
            <div className={styles.MiddleFooter}>
                <img src={YellowTwirl} alt={"Yellow Twirl"}/>
            </div>
            <RightFooter/>
        </div>
    )
}
function LeftFooter() {
    return (
        <div className={styles.leftContainer}>
            <img src={Logo} alt={"Logo"}/>
            <p className={css`
              font-size: 3rem;
              text-transform: uppercase;
              padding: 0px 20px 50px 0;
              width: 40rem;`}>Kami menaikkan level cemilan Indonesia</p>
            <p className={css`
              font-family: "Ubuntu";
              font-size: 1.5rem;`}>© 2023 Banka. All Rights Reserved. Privacy Policy. Terms of Use.</p>
        </div>
    )
}
function RightFooter() {
    return (
        <div className={styles.rightContainer}>
            <img src={WA} alt={"WA Button"}/>
            <img src={Email} alt={"Email Button"}/>
            <img src={Instagram} alt={"Instagram Button"}/>
        </div>
    );
}