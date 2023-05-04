import { ITool } from '@/components/Tool'
import { GetServerSideProps } from 'next'
import ToolList from '@/components/ToolList'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductDetail() {
  return (
    <Layout>
      <div className="max-w-7xl w-full">
        <Link href={`/`}>
          <div className="flex items-center mb-5">
            <Image src="/prev.png" alt="Prev Icon" width={20} height={20} />
            <p className="ml-2">Back</p>
          </div>
        </Link>
        <div>
          <div className="grid grid-cols-2">
            <div className="col-span-1 px-5 bg-[url('/elwotools-green-md.png')] bg-no-repeat bg-center bg-contain">
              <div className="grid grid-cols-2">
                <div className="col-start-2 col-span-1">
                  <Image className="mx-auto my-auto" src={product.url} alt="Tool Logo" width={400} height={400} />
                </div>
              </div>
            </div>
            <div className="col-span-1 px-5 mx-auto my-auto">
              <p className="opacity-75 text-lg mb-2">My selected tool</p>
              <p className="text-3xl font-bold mb-1">{product.name}</p>
              <p className="text-xl">{product.description}</p>
            </div>
          </div>
          <div className="py-8">
            <p className="text-lg mb-2">Accessories compatible with this tool :</p>
          </div>
        </div>
        <div className="">
          <ToolList tools={tools} />
        </div>
      </div>
    </Layout>
  )
}

export const tools: ITool[] = [
  {
    id: "1",
    productId: "1",
    name: "12V Battery",
    type: "Battery",
    price: "2.545",
    url: "/tool.png",
  },
  {
    id: "2",
    productId: "1",
    name: "12V Battery",
    type: "Battery",
    price: "2.545",
    url: "/tool.png",
  },
  {
    id: "3",
    productId: "1",
    name: "12V Battery",
    type: "Battery",
    price: "2.545",
    url: "/tool.png",
  },
  {
    id: "4",
    productId: "1",
    name: "12V Battery",
    type: "Battery",
    price: "2.545",
    url: "/tool.png",
  },
]

export const product = {
  id: "1",
  name: "Bosch GSR 12V",
  description: "Flexible 12V drill driver with 30Nm and up to 1300 revolutions per minute. Including bit holder adapter, offset angle adapter and angle adapter.",
  url: "/product.png"
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      product,
    },
  }
}
