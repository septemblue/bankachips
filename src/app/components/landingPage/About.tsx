import {css} from "@emotion/css";

export default function About() {
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
              color: #373732;`}>Banka mulai dengan mimpi sederhana. Kami ingin memberikan cemilan hangat untuk Indonesia. Kami mencari bahan dengan kualitas terbaik dan mengirim kebahagiaan untuk anda.</p>
        </div>
    )
}