import styles from '../styles/Footer.module.css'
import {Logo, YellowTwirl} from "../media/images";
import {css} from "@emotion/css";
import {useContext} from "react";
import {LanguageContext} from "../../context";
import {FooterEN, FooterID} from "../data/LandingPageData";
let props = {
    WA: "",
    Instagram: "",
    Email: ""
}

export default function Footer() {
    const language = useContext(LanguageContext)
    if (language === "en-US")
        props = FooterEN
    else
        props = FooterID
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
            <img src={props.WA} alt={"WA Button"}/>
            <img src={props.Email} alt={"Email Button"}/>
            <img src={props.Instagram} alt={"Instagram Button"}/>
        </div>
    );
}