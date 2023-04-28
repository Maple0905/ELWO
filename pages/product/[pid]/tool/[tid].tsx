import { GetServerSideProps } from 'next'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function ToolDetail() {

  return (
    <Layout>
      <div className="max-w-7xl">
        <Link href={`/product/${tool.productId}`}>
          <div className="flex items-center mb-5">
            <Image src="/prev.png" alt="Prev Icon" width={20} height={20} />
            <p className="ml-2">Back</p>
          </div>
        </Link>
        <div className="grid grid-cols-5 gap-8 mb-8">
          <div className="col-span-1">
            <Image src={tool.url} alt="Tool Logo" width={1000} height={1000} />
          </div>
          <div className="col-span-4 px-5">
            <div>
              <p className="opacity-75 text-lg mb-2">My selected accessory</p>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-3xl font-bold mb-1">{tool.name}</p>
                <p className="text-xl">{tool.description2}</p>
              </div>
              <div className="">
                <p className="inline-block text-5xl font-bold italic mb-1">{tool.description1}</p>
              </div>
            </div>
            <div className="pt-8">
              <p className="text-xl">{tool.description3}</p>
            </div>
            <div className="pt-8 grid grid-cols-2 gap-8">
              <div className="col-span-1">
                <p className="text-xl pb-1">Specifications</p>
                <hr className=""></hr>
                <div className="flex justify-between mr-3 py-2">
                  <p className="text-xl">Voltage</p>
                  <p className="text-xl">{tool.Voltage}</p>
                </div>
                <hr className=""></hr>
                <div className="flex justify-between mr-3 py-2">
                  <p className="text-xl">EAN</p>
                  <p className="text-xl">{tool.EAN}</p>
                </div>
              </div>
              <div className="col-span-1 flex items-end justify-end">
                <button className="bg-indigo-400 hover:bg-blue-600 text-white py-3 px-8 rounded">
                  <Link href={`/cart`}>Buy</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const tool = {
  id: "",
  productId: "1",
  name: "Bosch GSR 12V",
  description1: "626 kr",
  description2: "Bosch 12V Li-ion 3.0Ah stick battery. Fits Bosch 10.8V and 12V cordless tools.",
  description3: "Bosch Professional - Machines and accessories such as batteries and chargers from Bosch Professional are only compatible with other products in the same series, i.e. the blue Bosch Professional series. This means that you cannot use blue Bosch products together with products from the green Bosch DIY series. Bosch 12V Li-ion 3.0Ah stick battery. Fits Bosch 10.8V and 12V cordless tools.",
  Voltage: "12V",
  EAN: "3165140730358",
  url: "/tool.png"
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {
      tool,
    },
  }
}
