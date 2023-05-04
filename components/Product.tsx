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
    <div className="col-span-1 border-0 border-gray-300 bg-gray-100">
      <Link href={`product/${props.product.id}`} className="py-5 px-5">
        <div className="py-5 mx-auto bg-[url('/elwotools-white.png')] bg-no-repeat bg-center bg-contain">
          <Image
            className="mx-auto"
            src={props.product.url}
            alt="Next.js Logo"
            width={200}
            height={150}
          />
        </div>
        <div className="text-center">
          <p className="text-sm md:text-md lg:text-lg font-semibold">{props.product.name}</p>
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
