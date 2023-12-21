import styles from '../../styles/WLC.module.css'
import {AdTwo, Bancut, Twirl} from "../../media/images";
export default function WLC() {
    return (
        <div className={styles.WLC}>
            <LeftSide/>
            <RightSide/>
        </div>
    )
}
function LeftSide() {
    var userLang = navigator.language;
    alert ("The language is: " + userLang);
    return (
        <div className={styles.leftContainer}>
            <div className={styles.firstRow}>
                <p className={styles.What}>What</p>
                <img src={Twirl} alt="twirl"/>
            </div>
            <div className={styles.secondRow}>
                <p className={styles.LocalSnack}>Local Snack</p>
            </div>
            <div className={styles.thirdRow}>
                <img src={Bancut}/>
                <p className={styles.CanBe}>Can Be?</p>
            </div>
        </div>
    );
}
function RightSide() {
    return (
        <div className={styles.rightContainer}>
            <img src={AdTwo} alt="Advertisement pict two"/>
        </div>
    )
}