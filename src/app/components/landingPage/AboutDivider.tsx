import {AdThree} from "../../media/images";
import {css} from "@emotion/css";
import {LanguageContext} from "../../../context";
import {AboutDividerID, AboutDividerEN} from "../../data/LandingPageData";
import {useContext} from "react";
let props = {
    contentA: "",
    contentB: ""
}

export default function AboutDivider() {
    const language = useContext(LanguageContext)
    if (language === "en-US")
        props = AboutDividerEN
    else
        props = AboutDividerID
    return (
        <div className={css`
        position: relative;
        text-align: center;
        `}>
            <img className={css`
            width: 100%;`} src={AdThree} alt={"Advertisement Three"}/>
            <p className={css`
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              font-size: 3rem;
              white-space: nowrap;
              color: white;
              font-family: "Aceh Soft Extra Bold";
              text-transform: uppercase`}>{props.contentA} <span className={css`color: #FFEE57`}>{props.contentB}</span></p>
        </div>
    )
}