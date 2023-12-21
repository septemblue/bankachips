import {css} from "@emotion/css";
import {useContext} from "react";
import {LanguageContext} from "../../../context";
import {AboutID, AboutEN} from "../../data/LandingPageData";
let props = {
    content: ""
}

export default function About() {
    const language = useContext(LanguageContext)
    if (language === "en-US")
        props = AboutEN
    else
        props = AboutID
    return (
        <div className={css`
          display: flex;
          background: #EEEEEE;
          min-height: 400px;
          justify-content: center;
          align-items: center;
          font-size: 2.5rem;`}>
            <p className={css`
              text-align: center;
              max-width: 700px;
              color: #373732;`}>{props.content}</p>
        </div>
    )
}