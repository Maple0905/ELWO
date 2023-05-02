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
    <div className="col-span-1 rounded-lg border border-gray-300 bg-gray-100">
      <Link href={`product/${props.product.id}`} className="px-5 py-5">
        <div className="mb-5 mx-auto">
          <Image
            className="mx-auto px-5 md:px-0"
            src={props.product.url}
            alt="Next.js Logo"
            width={200}
            height={150}
          />
        </div>
        <div className="">
          <p className="md:ml-3 px-5 m-0 max-w-[30ch] text-sm md:text-md lg:text-lg">{props.product.name}</p>
          <p className="md:ml-3 px-5 m-0 max-w-[30ch] text-sm md:text-md lg:text-lg">{props.product.type}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product;
