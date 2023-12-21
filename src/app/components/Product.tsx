
interface ProductProps {
    image: string,
}
export default function Product(props: ProductProps) {
    return (
        <div className={"product"}>
            <img src={props.image} alt={"Product Image"}/>
        </div>
    )
}