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
    <div className="col-span-1 rounded-lg border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
      <Link href={`product/${props.product.id}`} className="px-5 py-4">
        <div className="mb-3 px-5">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src={props.product.url}
            alt="Next.js Logo"
            width={200}
            height={150}
          />
        </div>
        <p className="px-5 m-0 max-w-[30ch] text-md">{props.product.name}</p>
        <p className="px-5 m-0 max-w-[30ch] text-md">{props.product.type}</p>
      </Link>
    </div>
  )
}

export default Product;
