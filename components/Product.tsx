import Image from "next/image"
import Link from "next/link"

export interface IProduct {
  id: string
  name: string
  type: string
  description: string
  productId: string
  code: string
}

interface IProductProps {
  product: IProduct
}

export interface IProductName {
  name: string
}

const Product = (props: IProductProps) => {

  const productName = props.product.name;
  const productCode = props.product.code;

  return (
    <div className="col-span-1 border-0 border-gray-300 bg-gray-200">
      <Link href={{ pathname: `/product/${props.product.productId}`, query: { productName: productName, productCode: productCode } }} className="">
        <div className="px-3">
          <div className="py-5 mx-auto bg-[url('/elwotools-white.png')] bg-no-repeat bg-center bg-contain">
            <Image
              className="mx-auto"
              src="/product.png"
              alt="Next.js Logo"
              width={200}
              height={150}
            />
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm md:text-md lg:text-lg font-semibold">{props.product.name}</p>
          <p className="text-sm md:text-md lg:text-lg">{props.product.type}</p>
        </div>
        <div className="mt-3">
          <div className="grid grid-cols-2 content-end">
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
