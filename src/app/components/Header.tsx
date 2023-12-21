import React, {useContext} from 'react'
import styles from '../styles/Header.module.css'
import {Logo, LogoMark} from '../media/images'
import {LanguageContext} from "../../context";
import {HeaderEN, HeaderID} from '../data/LandingPageData'


export default function Header() {
    let props = ""
    const language = useContext(LanguageContext)
    if (language === "en-US")
        props = HeaderEN.cta
    else
        props = HeaderID.cta

    return (
        <div className={styles.header}>
            <img src={LogoMark} alt={"LogoMark"}/>
            <img src={Logo} alt={Logo}/>
            <a href="#" className={styles.ctaButton}>{props}</a>
        </div>
    );
}