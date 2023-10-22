import Image from "next/image";
import Accessory from "./Accessory";
import Link from "next/link";
import { useState } from "react";
import { IAccessory } from "@/typedefs";

interface IAccessoryListProps {
  accessoryList: IAccessory[],
  accessoryTypeList: string[],
  handleCart: () => void,
}

const AccessoryList = (props: IAccessoryListProps) => {
  const initialTypeList: string[] = props.accessoryTypeList.map((type) => "grid");
  const [ showMode, setShowMode ] = useState<string[]>(initialTypeList);

  const handleChangeShowMode = (mode: string, index: number) => {
    const modes = [...showMode];
    modes[index] = mode;
    setShowMode(modes);
  }

  return (
    <div>
    {
      props.accessoryTypeList.map((item, index) => {
        return (
          <div className="mb-10" key={index}>
            <div className="pb-2 sm:flex justify-between items-center justify-center">
              <p className="text-2xl mb-3 sm:mb-0 font-bold">{item}</p>
              <div className="flex items-center">
                <p className="text-xl">Show as : </p>
                <button className={`ml-5 flex items-center justify-center ${showMode[index] === "grid" ? "opacity-100" : "opacity-25"}`} onClick={() => handleChangeShowMode("grid", index)}>
                  <Image src="/grid-icon.png" width={32} height={20} alt="Grid View Icon" />
                  <p className="text-xl ml-1">Grid</p>
                </button>
                <button className={`ml-5 flex items-center justify-center ${showMode[index] === "list" ? "opacity-100" : "opacity-25"}`} onClick={() => handleChangeShowMode("list", index)}>
                  <Image src="/list-icon.png" width={32} height={20} alt="List View Icon" />
                  <p className="text-xl ml-1">List</p>
                </button>
              </div>
            </div>
            <hr className="border-5"></hr>
            {
              showMode[index] === "list" ?
                <div className="pt-5 mb-32 grid gap-8 text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
                  {
                    props.accessoryList.map((accessory) => {
                      return (
                        <>
                        {
                          accessory.type1 === item && (
                            <>
                            <div className="flex justify-between items-center">
                              <Link href={`/tool/${accessory.toolCode}/accessory/${accessory.id}`} className="px-5 py-4">
                                <div className="flex items-center">
                                  <Image src={accessory.img} alt="Accessory Logo" width={100} height={100} />
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
                          )
                        }
                        </>
                      )
                    }
                  )}
                </div>
                :
                <div className="pt-5 mb-32 text-center grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:mb-0 lg:grid-cols-4 lg:text-left">
                  {
                    props.accessoryList.map((accessory, index) => 
                      {
                        return (
                          <>
                          {
                            accessory.type1 === item && (<Accessory accessory={accessory} key={index} handleCart={props.handleCart} />)
                          }
                          </>
                        )
                      })
                  }
                </div>
            }
          </div>
        );
      })
    }
    </div>
  )
}

export default AccessoryList;
