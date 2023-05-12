import Image from "next/image";
import Accessory, {IAccessory} from "./Accessory";
import Link from "next/link";
import { useState } from "react";

interface IAccessoryListProps {
  accessoryList: IAccessory[],
  handleCart: () => void,
}

const AccessoryList = (props: IAccessoryListProps) => {

  const [ showMode, setShowMode ] = useState("grid");

  return (
    <div>
      <div className="pb-2 sm:flex justify-between items-center justify-center">
        <p className="text-2xl mb-3 sm:mb-0">Sandpapper</p>
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
            props.accessoryList.map((accessory) => 
            <>
              <div className="flex justify-between items-center">
                <Link href={`/tool/${accessory.toolId}/accessory/${accessory.id}`} className="px-5 py-4">
                  <div className="flex items-center">
                    <Image src={accessory.url} alt="Accessory Logo" width={100} height={100} />
                    <p className="text-xl ml-5">{accessory.name}</p>
                  </div>
                </Link>
                <div>
                  <button className="bg-green-600 hover:bg-green-800 text-white py-1 px-5 mr-3 sm:mr-0 rounded" onClick={props.handleCart}>
                    Add to Cart
                  </button>
                </div>
              </div>
              <hr></hr>
            </>
          )}
        </div>
        :
        <div className="pt-5 mb-32 text-center grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:mb-0 lg:grid-cols-4 lg:text-left">
          {props.accessoryList.map((accessory, index) => <Accessory accessory={accessory} key={index} handleCart={props.handleCart} />)}
        </div>
      }
    </div>
  )
}

export default AccessoryList;
