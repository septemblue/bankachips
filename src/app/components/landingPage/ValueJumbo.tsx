import {AdOne} from "../../media/images";
import styles from '../../styles/ValueJumbo.module.css'
import {useContext} from "react";
import {LanguageContext} from "../../../context";
import {JumboID, JumboEN} from "../../data/LandingPageData";
let props = {
    value: "",
    description: ""
}
export default function ValueJumbo() {
    const language = useContext(LanguageContext)
    if (language === "en-US")
        props = JumboEN
    else
        props = JumboID
    return (
        <div className={styles.ValueJumbo}>
            <LeftSide/>
            <RightSide/>
        </div>
    )
}
function LeftSide() {
    return (
        <div className={styles.leftContainer}>
            <p className={styles.value}>{props.value}</p>
            <p className={styles.description}>{props.description}</p>
        </div>
    )
}
function RightSide() {
    return (
        <div className={styles.rightContainer}>
            <img src={AdOne} alt={"Advertisement one"}/>
        </div>
    )
}