import Product, {IProduct} from "./Product";

interface IProductListProps {
  products: IProduct[]
}

const ProductList = (props: IProductListProps) => {
  return (
    <div className="mb-32 grid gap-8 text-left mb-0 sm:grid-cols-2 lg:grid-cols-4">
      {props.products.map((product, index) => <Product product={product} key={index} />)}
    </div>
  )
}

export default ProductList;
