import {AdThree} from "../../media/images";
import {css} from "@emotion/css";

export default function AboutDivider() {
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
              text-transform: uppercase`}>Rasakan Indonesia, Dalam <span className={css`color: #FFEE57`}>Satu Gigitan</span></p>
        </div>
    )
}