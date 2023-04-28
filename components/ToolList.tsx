import Image from "next/image";
import Tool, {ITool} from "./Tool";
import Link from "next/link";
import { useState } from "react";

interface IToolListProps {
  tools: ITool[]
}

const ToolList = (props: IToolListProps) => {

  const [ showMode, setShowMode ] = useState("grid");
  
  return (
    <div>
      <div className="pb-2 flex justify-between items-center justify-center">
        <p className="text-2xl">Batteries</p>
        <div className="flex items-center">
          <p className="text-xl">Show as : </p>
          <button className="ml-5 flex items-center justify-center"  onClick={() => setShowMode("grid")}>
            <Image className="opacity-75" src="/grid-icon.png" width={32} height={20} alt="Grid View Icon" />
            <p className="text-xl ml-1">Grid</p>
          </button>
          <button className="ml-5 flex items-center justify-center" onClick={() => setShowMode("list")}>
            <Image className="opacity-75" src="/list-icon.png" width={32} height={20} alt="List View Icon" />
            <p className="text-xl ml-1">List</p>
          </button>
        </div>
      </div>
      <hr className="border-5"></hr>
      {
        showMode == "list" ?
        <div className="pt-5 mb-32 grid gap-8 text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
          {
            props.tools.map((tool, index) => 
            <>
              <div className="flex justify-between items-center">
                <Link href={`/product/${tool.productId}/tool/${tool.id}`} className="px-5 py-4">
                  <div className="flex items-center">
                    <Image src={tool.url} alt="Tool Logo" width={100} height={100} />
                    <p className="text-xl ml-5">{tool.name}</p>
                  </div>
                </Link>
                <div>
                  <button className="bg-indigo-400 hover:bg-blue-600 text-white py-1 px-5 rounded">
                    <Link href={`/cart`}>Buy</Link>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        :
        <div className="pt-5 mb-32 grid gap-8 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
          {props.tools.map((tool, index) => <Tool tool={tool} key={index} />)}
        </div>
      }
    </div>
  )
}

export default ToolList;
