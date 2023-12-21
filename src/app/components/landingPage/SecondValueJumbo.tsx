import styles from '../../styles/SecondJumbo.module.css'
import {BananaTrees, MatchaChips, BankaMatcha, Certificates} from "../../media/images";
import {useContext} from "react";
import {LanguageContext} from "../../../context";
import {JumboSecondID, JumboSecondEN} from "../../data/LandingPageData";
let props = {
    value: "",
    description: "",
    certificates: ""
}

export default function SecondValueJumbo() {
    const language = useContext(LanguageContext)
    if (language === "en-US")
        props = JumboSecondEN
    else
        props = JumboSecondID
    return (
        <div className={styles.SecondValueJumbo}>
          <LeftSide/>
          <RightSide/>
        </div>
    )
}
function LeftSide() {
    return (
        <div className={styles.leftContainer}>
            <img src={BananaTrees} alt={"Banana Trees"}/>
            <div className={styles.splitLeftContainer}>
                <img src={MatchaChips} alt={"Matcha Chips"}/>
                <img src={BankaMatcha} alt={"Banka Matcha"}/>
            </div>
        </div>
    );
}
function RightSide() {
    return (
        <div className={styles.rightContainer}>
            <p className={styles.value}>{props.value}</p>
            <p className={styles.description}>{props.description}</p>
            <img src={props.certificates} alt={"Table Certificates"}/>
        </div>
    );
}