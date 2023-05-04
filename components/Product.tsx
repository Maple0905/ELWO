import Image from "next/image"
import Link from "next/link"

export interface IProduct {
  id: string
  name: string
  type: string
  url: string
}

interface IProductProps {
  product: IProduct
}

const Product = (props: IProductProps) => {
  return (
    <div className="col-span-1 border border-gray-300 bg-gray-100">
      <Link href={`product/${props.product.id}`} className="py-5">
        <div className="py-5 mx-auto">
          <Image
            className="mx-auto px-5 md:px-0"
            src={props.product.url}
            alt="Next.js Logo"
            width={200}
            height={150}
          />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold md:text-md lg:text-lg">{props.product.name}</p>
          <p className="text-sm md:text-md lg:text-lg">{props.product.type}</p>
        </div>
        <div className="mt-3">
          <div className="grid grid-cols-2">
            <div className="col-start-2 col-span-1 text-center text-white py-2 bg-green-600">
              Buy
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product;
