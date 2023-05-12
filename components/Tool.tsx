import Image from "next/image"
import Link from "next/link"
import styles from "../public/css/custom.module.css";

export interface ITool {
  id: string
  name: string
  type: string
  description: string
  toolId: string
  code: string
  url: string
}

interface IToolProps {
  tool: ITool
}

const Tool = (props: IToolProps) => {

  return (
    <div className="col-span-1 border-0 border-gray-300 bg-gray-200">
      <Link href={`/tool/${props.tool.toolId}`} className="flex flex-col">
        <div className="px-3">
          <div className="py-5 mx-auto bg-[url('/elwotools-white.png')] bg-no-repeat bg-center bg-contain">
            <div className={`${styles.toolImg} bg-white flex justify-content-center items-center`}>
              <Image
                className="mx-auto"
                src={props.tool.url}
                alt="Next.js Logo"
                layout="responsive"
                width={200}
                height={200}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm md:text-md lg:text-lg font-semibold">{props.tool.name}</p>
          <p className="text-sm md:text-md lg:text-lg">{props.tool.type}</p>
        </div>
        <div className="mt-3 items-end">
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

export default Tool;
