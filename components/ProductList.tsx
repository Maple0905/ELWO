import Product, {IProduct} from "./Product";

interface IProductListProps {
  products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
  return (
    <div className="mb-32 grid gap-8 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      {props.products.map((product, index) => <Product product={product} key={index} />)}
    </div>
  )
}

export default ProductList;
