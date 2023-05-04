import Image from "next/image"
import Link from "next/link"

export interface ITool {
  id: string
  productId: string
  name: string
  type: string
  price: string
  url: string
}

interface IToolProps {
  tool: ITool
}

const Tool = (props: IToolProps) => {
  return (
    <div className="col-span-1 border border-gray-300 bg-gray-100 bg-[url('/elwotools-border-white.png')] bg-no-repeat bg-center bg-contain">
      <Link href={`/product/${props.tool.productId}/tool/${props.tool.id}`} className="py-5">
        <div className="my-3 px-5 mx-auto">
          <h1 className="text-red-600 text-xl font-black">BOSCH</h1>
          <Image
            className="mx-auto"
            src={props.tool.url}
            alt="Tool Logo"
            width={200}
            height={200}
          />
        </div>
        <div className="py-3 text-center">
          <p className="text-sm md:text-md lg:text-lg font-semibold">{props.tool.name}</p>
          <p className="text-sm md:text-md lg:text-lg">{props.tool.type}</p>
          <p className="text-sm md:text-md lg:text-lg font-semibold">{props.tool.price}</p>
        </div>
        <div className="">
          <button className=" bg-green-600 hover:bg-green-800 text-white py-3 w-full">
            <Link href={`/cart`} className="flex justify-center items-center">
              <p>Added to cart</p>
              <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                <g transform="translate(0 0)">
                  <g>
                    <path data-name="Path 16787" d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z" transform="translate(0 -463.248)" fill="currentColor"></path>
                    <path data-name="Path 16788" d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z" transform="translate(-1.191 -466.622)" fill="currentColor"></path>
                    <path data-name="Path 16789" d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z" transform="translate(-2.875 -466.622)" fill="currentColor"></path>
                  </g>
                </g>
              </svg>
            </Link>
          </button>
        </div>
      </Link>
    </div>
  )
}

export default Tool;
