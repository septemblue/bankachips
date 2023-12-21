import styled from "@emotion/styled";

interface MarketProps {
    image: string,
    marketName: string
}
export default function Market(props: MarketProps) {

    return (
        <div className={"market"}>
            <img src={props.image} alt={"Market"}/>
            <MarketName>{props.marketName}</MarketName>
            <BlueButton>Cari Tau Yuk</BlueButton>
        </div>
    )
}
const MarketName = styled.p `
  font-family: "Aceh Soft Extra Bold";
  font-size: 3.5rem;
  text-transform: uppercase;
  width: 15rem;
  padding: 20px;
  text-align: center;
  clear: left;
`
const BlueButton = styled.a`
  background-color: #0081DE;
  color: white;
  text-transform: uppercase;
  font-family: "Aceh Soft-Black";
  font-size: 3rem;
  padding: 10px 25px 10px 25px;
  text-decoration: none;
  box-shadow: 0 3px 4px rgb(0 0 0 / 0.2);
    `
