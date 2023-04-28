import Image from "next/image"
import Link from "next/link"

export interface ITool {
  id: string
  productId: string
  name: string
  url: string
  type: string
}

interface IToolProps {
  tool: ITool
}

const Tool = (props: IToolProps) => {
  return (
    <div className="col-span-1 rounded-lg border border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
      <Link href={`/product/${props.tool.productId}/tool/${props.tool.id}`} className="px-5 py-4">
        <div className="mb-3 px-5 flex justify-center">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src={props.tool.url}
            alt="Tool Logo"
            width={200}
            height={200}
          />
        </div>
        <div className="px-5 pt-3 flex justify-between items-center">
          <p className="m-0 text-md">{props.tool.name}</p>
          <button className="bg-indigo-400 hover:bg-blue-600 text-white py-1 px-5 rounded">
            <Link href={`/cart`}>Buy</Link>
          </button>
        </div>
      </Link>
    </div>
  )
}

export default Tool;
