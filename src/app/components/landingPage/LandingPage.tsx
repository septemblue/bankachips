import Header from "../Header";
import WLC from "./WLC";
import ValueJumbo from "./ValueJumbo";
import SecondValueJumbo from "./SecondValueJumbo";
import ProductsDivider from "./ProductsDivider";
import MarketDivider from "./MarketDivider";
import AboutDivider from "./AboutDivider";
import About from "./About";
import Product from "../Product";
import Market from "../Market";
import {Choco, Matcha, Taro, Tiramisu} from "../../media/images";
import {BazaarCharity, FebMarket, KitaPeduli, CivilExpo} from "../../media/images";
import React from "react";
import '../../styles/LandingPage.css'
import {css} from "@emotion/css";

export default function LandingPage() {
    return (
        <div className={"LandingPage"}>
            <Header/>
            <WLC/>
            <ValueJumbo/>
            <SecondValueJumbo/>
            <ProductsDivider/>
            <ProductRow/>
            <MarketDivider/>
            <MarketRow/>
            <AboutDivider/>
            <About/>
        </div>
    )
}
function ProductRow() {
    return (
        <div>
            <div className={"topShelf"}>
                <Product image={Tiramisu}/>
                <Product image={Choco}/>
            </div>
            <div className={"bottomShelf"}>
                <Product image={Matcha}/>
                <Product image={Taro}/>
            </div>
        </div>
    )
}
function MarketRow() {
    return (
        <div className={css`
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          padding-bottom: 50px;
        `}>
            <Market image={KitaPeduli} marketName={"Kita Peduli"}/>
            <Market image={FebMarket} marketName={"Feb Market"}/>
            <Market image={BazaarCharity} marketName={"Bazaar Charity"}/>
            <Market image={CivilExpo} marketName={"Civil Expo"}/>
        </div>
    )
}